// Job Service - CRUD operations for jobs
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
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase';

const COLLECTION_NAME = 'jobs';

// Get all jobs
export const getAllJobs = async () => {
  try {
    const jobsRef = collection(db, COLLECTION_NAME);
    const q = query(jobsRef, orderBy('posted', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

// Get active jobs only
export const getActiveJobs = async () => {
  try {
    const jobsRef = collection(db, COLLECTION_NAME);
    // First try with composite index
    try {
      const q = query(
        jobsRef, 
        where('status', '==', 'active'),
        orderBy('posted', 'desc')
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (indexError) {
      // Fallback: get all jobs and filter client-side if index not created
      console.warn('Composite index required. Falling back to client-side filtering.');
      const snapshot = await getDocs(jobsRef);
      const allJobs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      // Filter active jobs and sort by posted date
      return allJobs
        .filter(job => job.status === 'active')
        .sort((a, b) => {
          const dateA = a.posted?.toDate?.() || new Date(a.posted) || new Date(0);
          const dateB = b.posted?.toDate?.() || new Date(b.posted) || new Date(0);
          return dateB - dateA;
        });
    }
  } catch (error) {
    console.error('Error fetching active jobs:', error);
    throw error;
  }
};

// Get single job by ID
export const getJobById = async (jobId) => {
  try {
    const jobRef = doc(db, COLLECTION_NAME, jobId);
    const snapshot = await getDoc(jobRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error('Error fetching job:', error);
    throw error;
  }
};

// Create new job
export const createJob = async (jobData) => {
  try {
    const jobsRef = collection(db, COLLECTION_NAME);
    const newJob = {
      ...jobData,
      posted: serverTimestamp(),
      status: 'active',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    const docRef = await addDoc(jobsRef, newJob);
    return { id: docRef.id, ...newJob };
  } catch (error) {
    console.error('Error creating job:', error);
    throw error;
  }
};

// Update job
export const updateJob = async (jobId, jobData) => {
  try {
    const jobRef = doc(db, COLLECTION_NAME, jobId);
    const updatedJob = {
      ...jobData,
      updatedAt: serverTimestamp()
    };
    await updateDoc(jobRef, updatedJob);
    return { id: jobId, ...updatedJob };
  } catch (error) {
    console.error('Error updating job:', error);
    throw error;
  }
};

// Delete job
export const deleteJob = async (jobId) => {
  try {
    const jobRef = doc(db, COLLECTION_NAME, jobId);
    await deleteDoc(jobRef);
    return true;
  } catch (error) {
    console.error('Error deleting job:', error);
    throw error;
  }
};

// Toggle job status
export const toggleJobStatus = async (jobId, currentStatus) => {
  try {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    const jobRef = doc(db, COLLECTION_NAME, jobId);
    await updateDoc(jobRef, { 
      status: newStatus,
      updatedAt: serverTimestamp()
    });
    return newStatus;
  } catch (error) {
    console.error('Error toggling job status:', error);
    throw error;
  }
};
