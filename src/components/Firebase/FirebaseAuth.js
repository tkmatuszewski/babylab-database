import 'firebase/auth';
import firebaseApp from './Firebase'

export const isInitialized = () => {
    // listen for auth state changes
    return new Promise(resolve => firebaseApp.auth().onAuthStateChanged(resolve))
    // unsubscribe to the listener when unmounting
}

export const createNewUser = async (name, email, password) => {
    await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    return firebaseApp.auth().currentUser.updateProfile({
        displayName: name
    })
}

export const signIn = (email, password) => {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password)
}
//
// export const resetPassword = (email) => app.auth().sendPasswordResetEmail(email)
//
// export const updatePassword = email => app.auth().sendPasswordResetEmail(email);
//
export const signOut = () => {
    return firebaseApp.auth().signOut();
};

export const getCurrentUserName = () => {
    return firebaseApp.auth().currentUser && firebaseApp.auth().currentUser.displayName
}
