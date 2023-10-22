import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite"

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

// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
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
