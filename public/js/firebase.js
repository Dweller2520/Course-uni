let firebaseConfig = {
    apiKey: "AIzaSyDKAVnEZWGW4PoGUkSVWfEGLkpNFg_R08o",
    authDomain: "blogging-site-1a7b8.firebaseapp.com",
    projectId: "blogging-site-1a7b8",
    storageBucket: "blogging-site-1a7b8.appspot.com",
    messagingSenderId: "509394001114",
    appId: "1:509394001114:web:8e0ad3189000b9670319e3"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();