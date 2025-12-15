// Application Service - CRUD operations for job applications
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

const COLLECTION_NAME = 'applications';

// Get all applications
export const getAllApplications = async () => {
  try {
    const applicationsRef = collection(db, COLLECTION_NAME);
    const q = query(applicationsRef, orderBy('appliedAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching applications:', error);
    throw error;
  }
};

// Get applications for a specific job
export const getApplicationsByJob = async (jobId) => {
  try {
    const applicationsRef = collection(db, COLLECTION_NAME);
    const q = query(
      applicationsRef, 
      where('jobId', '==', jobId),
      orderBy('appliedAt', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching job applications:', error);
    throw error;
  }
};

// Get single application by ID
export const getApplicationById = async (applicationId) => {
  try {
    const applicationRef = doc(db, COLLECTION_NAME, applicationId);
    const snapshot = await getDoc(applicationRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error('Error fetching application:', error);
    throw error;
  }
};

// Submit job application (resume URL stored as link string)
export const submitApplication = async (applicationData) => {
  try {
    const applicationsRef = collection(db, COLLECTION_NAME);
    
    // Create application
    const newApplication = {
      ...applicationData,
      status: 'new',
      appliedAt: serverTimestamp(),
      createdAt: serverTimestamp()
    };
    
    const docRef = await addDoc(applicationsRef, newApplication);
    
    return { id: docRef.id, ...newApplication };
  } catch (error) {
    console.error('Error submitting application:', error);
    throw error;
  }
};

// Update application status
export const updateApplicationStatus = async (applicationId, status, notes = '') => {
  try {
    const applicationRef = doc(db, COLLECTION_NAME, applicationId);
    await updateDoc(applicationRef, { 
      status,
      notes,
      updatedAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('Error updating application status:', error);
    throw error;
  }
};

// Delete application
export const deleteApplication = async (applicationId) => {
  try {
    const applicationRef = doc(db, COLLECTION_NAME, applicationId);
    await deleteDoc(applicationRef);
    return true;
  } catch (error) {
    console.error('Error deleting application:', error);
    throw error;
  }
};
