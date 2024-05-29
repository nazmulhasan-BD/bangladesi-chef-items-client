import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase-config/firebase.config';

export const UserContext = createContext(null)

const auth = getAuth(app);

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // for google signup
    const googleSignUp = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    // for github signup
    const githubSignUp = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // for register
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // for log in
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // for log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // for update user profile
    const updateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // observe auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            if (currentUser) {
                setLoading(true);
                // User is logged in
                setUser(currentUser);
                setLoading(false);
            } else {
                // User is logged out
                setUser(null);

                setLoading(false);
            }
        });
        return () => {
            return unsubscribe();
        }
    }, []);

    const userInfo = {
        user,
        googleSignUp,
        githubSignUp,
        createUser,
        signInUser,
        updateUser,
        logOut,
        loading,
        setLoading,
        error,
        setError
    }

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;