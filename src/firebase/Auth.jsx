import { initializeApp } from "firebase/app";

import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";
import { useContext, useEffect, useState, createContext } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyAAgF4haFihHh9x-db6ShQlgpUnJj1G22g",
    authDomain: "test-cb783.firebaseapp.com",
    projectId: "test-cb783",
    storageBucket: "test-cb783.appspot.com",
    messagingSenderId: "303916329909",
    appId: "1:303916329909:web:9a4ba8eb1bf29e9cf807fc",
    measurementId: "G-E9LYNZ8T9V"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
};

export const useAuth = () => useContext(AuthContext);

function useProvideAuth(){
    const [user, setUser] = useState();

    const signUp = (email, password, displayName) =>
        createUserWithEmailAndPassword(auth, email, password).then(({user}) => {
            updateProfile(user, {displayName});
            setUser(user);
            return user;
        });

    const signIn = (email, password) => 
        signInWithEmailAndPassword(auth, email, password).then(({user}) => {
            setUser(user);
            return user;
        });

    const signOutUser = () => signOut(auth).then(() => setUser(null));

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            user ? setUser(user) : setUser(null);
        });
        return () => unsubscribe();
    });

    return { signIn, signUp, signOut: signOutUser, user};
}

export default AuthProvider;