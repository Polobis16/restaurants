import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAtbs0GNI3ADFXu3WYlmz8YY7llvKMWHr8",
    authDomain: "restaurants-d2aad.firebaseapp.com",
    projectId: "restaurants-d2aad",
    storageBucket: "restaurants-d2aad.appspot.com",
    messagingSenderId: "452155528843",
    appId: "1:452155528843:web:8129e8a5a16b15056da68e"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)