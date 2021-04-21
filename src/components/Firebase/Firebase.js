import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyDF_oTvC5mwId5ffyHe2Cqt2asBW63_Tps",
    authDomain: "babylab-database.firebaseapp.com",
    databaseURL: "https://babylab-database.firebaseio.com",
    projectId: "babylab-database",
    storageBucket: "babylab-database.appspot.com",
    messagingSenderId: "349211539105",
    appId: "1:349211539105:web:f74ed3775efe4cafa322e0",
    measurementId: "G-7FQQVTXP1Z"
};

const firebaseApp = app.initializeApp(config)

export default firebaseApp


// class Firebase {
//     constructor() {
//         app.initializeApp(config);
//
//         this.auth = app.auth();
//         this.db = app.firestore();
//     }
//
//     createNewUser = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)
//
//     signIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password)
//
//     resetPassword = (email) => this.auth.sendPasswordResetEmail(email)
//
//     updatePassword = email => this.auth.sendPasswordResetEmail(email);
//
//     signOut= () => this.auth.signOut();
//
//     user = uid => this.db.ref(`users/${uid}`);
//
//     users = () => this.db.ref('users');
// }
//
// export default Firebase
