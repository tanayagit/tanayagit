import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBmvTgsp7DDDA7_2OW4pSGreUZI_U_5fBU",
    authDomain: "achat-87bab.firebaseapp.com",
    projectId: "achat-87bab",
    storageBucket: "achat-87bab.appspot.com",
    messagingSenderId: "680273379500",
    appId: "1:680273379500:web:607ada389d44fa141f9f09",
    measurementId: "G-555JEYC2BS"
})
    


const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }