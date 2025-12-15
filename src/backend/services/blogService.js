// Blog Service - CRUD operations for blogs
import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  where,
  limit,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase';

const COLLECTION_NAME = 'blogs';

// Get all blogs
export const getAllBlogs = async () => {
  try {
    const blogsRef = collection(db, COLLECTION_NAME);
    const q = query(blogsRef, orderBy('publishedAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

// Get published blogs only
export const getPublishedBlogs = async () => {
  try {
    const blogsRef = collection(db, COLLECTION_NAME);
    // Try with composite index first
    try {
      const q = query(
        blogsRef, 
        where('status', '==', 'published'),
        orderBy('publishedAt', 'desc')
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (indexError) {
      // Fallback: get all blogs and filter client-side
      console.warn('Composite index required. Falling back to client-side filtering.');
      const snapshot = await getDocs(blogsRef);
      const allBlogs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      return allBlogs
        .filter(blog => blog.status === 'published')
        .sort((a, b) => {
          const dateA = a.publishedAt?.toDate?.() || new Date(a.publishedAt) || new Date(0);
          const dateB = b.publishedAt?.toDate?.() || new Date(b.publishedAt) || new Date(0);
          return dateB - dateA;
        });
    }
  } catch (error) {
    console.error('Error fetching published blogs:', error);
    throw error;
  }
};

// Get recent blogs (for homepage)
export const getRecentBlogs = async (count = 3) => {
  try {
    const blogsRef = collection(db, COLLECTION_NAME);
    // Try with composite index first
    try {
      const q = query(
        blogsRef, 
        where('status', '==', 'published'),
        orderBy('publishedAt', 'desc'),
        limit(count)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (indexError) {
      // Fallback: get all blogs and filter client-side
      console.warn('Composite index required. Falling back to client-side filtering.');
      const snapshot = await getDocs(blogsRef);
      const allBlogs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      return allBlogs
        .filter(blog => blog.status === 'published')
        .sort((a, b) => {
          const dateA = a.publishedAt?.toDate?.() || new Date(a.publishedAt) || new Date(0);
          const dateB = b.publishedAt?.toDate?.() || new Date(b.publishedAt) || new Date(0);
          return dateB - dateA;
        })
        .slice(0, count);
    }
  } catch (error) {
    console.error('Error fetching recent blogs:', error);
    throw error;
  }
};

// Get single blog by ID
export const getBlogById = async (blogId) => {
  try {
    const blogRef = doc(db, COLLECTION_NAME, blogId);
    const snapshot = await getDoc(blogRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
};

// Get blog by slug
export const getBlogBySlug = async (slug) => {
  try {
    const blogsRef = collection(db, COLLECTION_NAME);
    const q = query(blogsRef, where('slug', '==', slug));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    }
    return null;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    throw error;
  }
};

// Create new blog (image stored as URL string in featuredImage field)
export const createBlog = async (blogData) => {
  try {
    const blogsRef = collection(db, COLLECTION_NAME);
    
    // Generate slug from title
    const slug = blogData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    const newBlog = {
      ...blogData,
      slug,
      status: blogData.status || 'draft',
      publishedAt: blogData.status === 'published' ? serverTimestamp() : null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    
    const docRef = await addDoc(blogsRef, newBlog);
    
    return { id: docRef.id, ...newBlog };
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

// Update blog
export const updateBlog = async (blogId, blogData) => {
  try {
    const blogRef = doc(db, COLLECTION_NAME, blogId);
    
    // Regenerate slug if title changed
    const slug = blogData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    const updatedBlog = {
      ...blogData,
      slug,
      updatedAt: serverTimestamp()
    };
    
    // Set publishedAt if publishing for first time
    if (blogData.status === 'published' && !blogData.publishedAt) {
      updatedBlog.publishedAt = serverTimestamp();
    }
    
    await updateDoc(blogRef, updatedBlog);
    return { id: blogId, ...updatedBlog };
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
};

// Delete blog
export const deleteBlog = async (blogId) => {
  try {
    const blogRef = doc(db, COLLECTION_NAME, blogId);
    await deleteDoc(blogRef);
    return true;
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
};

// Toggle blog publish status
export const toggleBlogStatus = async (blogId, currentStatus) => {
  try {
    const newStatus = currentStatus === 'published' ? 'draft' : 'published';
    const blogRef = doc(db, COLLECTION_NAME, blogId);
    const updateData = { 
      status: newStatus,
      updatedAt: serverTimestamp()
    };
    
    if (newStatus === 'published') {
      updateData.publishedAt = serverTimestamp();
    }
    
    await updateDoc(blogRef, updateData);
    return newStatus;
  } catch (error) {
    console.error('Error toggling blog status:', error);
    throw error;
  }
};
