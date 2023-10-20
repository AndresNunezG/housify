import {
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  collection,
  getFirestore,
} from "firebase/firestore";
import {
  ref,
  getStorage,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";
import firebaseApp from "./app"

const db = getFirestore(firebaseApp);

export async function getDocumentById(
  collectionName: string,
  documentId: string
) {
  const docRef = doc(db, collectionName, documentId)
  const docSnap = await getDoc(docRef)
  return docSnap.exists() ? docSnap.data() : null
}

export async function getAllCollectionDocuments(
  collectionName: string,
) {
  const querySnap = await getDocs(collection(db, collectionName))
  return querySnap.docs.map(snap => snap.data())
}

export async function createDocument(
  collectionName: string,
  data: object,
) {
  const newDocRef = doc(collection(db, collectionName))
  return await setDoc(newDocRef, data)
}

export async function updateDocument(
  collectionName: string,
  docId: string,
  data: object,
) {
  const docRef = doc(db, collectionName, docId)
  return await updateDoc(docRef, data)
}

export async function deleteDocument(
  collectionName: string,
  docId: string,
) {
  const docRef = doc(db, collectionName, docId)
  await deleteDoc(docRef);
}

export async function uploadImageToStorage(file: File) {
  const storage = getStorage()
  const storageRef = ref(storage, `properties/images/${file.name}`)
  await uploadBytes(storageRef, file)
  const downloadUrl = getDownloadURL(storageRef)
  return downloadUrl
}
