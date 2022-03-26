import { initializeApp } from "@firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { FIREBASE_PUBLIC_CONFIG } from "@the-chat/config"

initializeApp(FIREBASE_PUBLIC_CONFIG)

const auth = getAuth()
auth.useDeviceLanguage()
// learn
auth.onAuthStateChanged(() => {})

const db = getFirestore()

const storage = getStorage()

export { auth, db, storage }
