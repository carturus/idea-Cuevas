import firebase from 'firebase/app'
import 'firebase/firestore'

const app=firebase.initializeApp({
    apiKey: "AIzaSyAHAdBC5xiQF2dHiNF7ZuPKyCv9_nFa9yk",
    authDomain: "mydoctror.firebaseapp.com",
    projectId: "mydoctror",
    storageBucket: "mydoctror.appspot.com",
    messagingSenderId: "983784472976",
    appId: "1:983784472976:web:6ddb9626f0d89d2401b315"
})

export const getFirebase =()=>app
export const getFirestore =()=> firebase.firestore(app)

