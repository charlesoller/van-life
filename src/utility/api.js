import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAuAq-c0fDrCv1iZngwphzSDWxeq_pJDRA",
  authDomain: "vanlife-c45cc.firebaseapp.com",
  projectId: "vanlife-c45cc",
  storageBucket: "vanlife-c45cc.appspot.com",
  messagingSenderId: "371164399703",
  appId: "1:371164399703:web:d0c0fe4962b91fb064bb12"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
    }))

    return vans;
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id);
    const snapshot = await getDoc(docRef);
    const van = snapshot.data();

    return van;
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
