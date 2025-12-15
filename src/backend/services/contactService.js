// Contact Service - CRUD operations for contact form submissions
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

const COLLECTION_NAME = 'contacts';

// Get all contact submissions
export const getAllContacts = async () => {
  try {
    const contactsRef = collection(db, COLLECTION_NAME);
    const q = query(contactsRef, orderBy('submittedAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

// Get unread contacts
export const getUnreadContacts = async () => {
  try {
    const contactsRef = collection(db, COLLECTION_NAME);
    const q = query(
      contactsRef, 
      where('status', '==', 'new'),
      orderBy('submittedAt', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching unread contacts:', error);
    throw error;
  }
};

// Get single contact by ID
export const getContactById = async (contactId) => {
  try {
    const contactRef = doc(db, COLLECTION_NAME, contactId);
    const snapshot = await getDoc(contactRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error('Error fetching contact:', error);
    throw error;
  }
};

// Submit contact form
export const submitContact = async (contactData) => {
  try {
    const contactsRef = collection(db, COLLECTION_NAME);
    const newContact = {
      ...contactData,
      status: 'new',
      submittedAt: serverTimestamp(),
      createdAt: serverTimestamp()
    };
    const docRef = await addDoc(contactsRef, newContact);
    return { id: docRef.id, ...newContact };
  } catch (error) {
    console.error('Error submitting contact:', error);
    throw error;
  }
};

// Mark contact as read
export const markContactAsRead = async (contactId) => {
  try {
    const contactRef = doc(db, COLLECTION_NAME, contactId);
    await updateDoc(contactRef, { 
      status: 'read',
      readAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('Error marking contact as read:', error);
    throw error;
  }
};

// Update contact status
export const updateContactStatus = async (contactId, status, notes = '') => {
  try {
    const contactRef = doc(db, COLLECTION_NAME, contactId);
    await updateDoc(contactRef, { 
      status,
      notes,
      updatedAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('Error updating contact status:', error);
    throw error;
  }
};

// Delete contact
export const deleteContact = async (contactId) => {
  try {
    const contactRef = doc(db, COLLECTION_NAME, contactId);
    await deleteDoc(contactRef);
    return true;
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};

// Reply to contact (update with reply info)
export const replyToContact = async (contactId, replyData) => {
  try {
    const contactRef = doc(db, COLLECTION_NAME, contactId);
    await updateDoc(contactRef, { 
      status: 'replied',
      reply: replyData,
      repliedAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('Error replying to contact:', error);
    throw error;
  }
};
