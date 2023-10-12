import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export async function getCurrentUser() {
  const auth = await getAuth();
  return new Promise((resolve) => {
    auth.onAuthStateChanged(user => {
      resolve(user)
    });
  });
}

export function logout() {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    signOut(auth).then(() => {
      resolve(true)
    }).catch((error) => {
      reject(error)
    });
  })
}

export function registerUserWithEmailAndPassword(
  email: string,
  password: string
) {
  const auth = getAuth();
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user)
      })
      .catch((error) => {
        reject(error)
      });
  })
}

export function loginWithEmailAndPassword(
  email: string,
  password: string
) {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user)
      })
      .catch((error) => {
        reject(error)
      });
  })
}

export function loginWithProvider() {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        resolve(user)
      })
      .catch((error) => {
        reject(error)
      });
  })
}
