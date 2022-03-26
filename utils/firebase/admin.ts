import { cert, getApps, initializeApp } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"
import { getFirestore } from "firebase-admin/firestore"
import { getStorage } from "firebase-admin/storage"
import { FIREBASE_ADMIN_CONFIG } from "@the-chat/config"

getApps()[0] || initializeApp(FIREBASE_ADMIN_CONFIG(cert))

export const auth = getAuth(),
  db = getFirestore(),
  storage = getStorage()
