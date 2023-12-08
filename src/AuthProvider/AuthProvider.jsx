import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import toast from "react-hot-toast";


export const AuthContext = createContext(null)
const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // google 
    const GoogleAuth = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider)
    }
    // creat User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //login
    const LogInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Update user
    const UpdateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // logOUT
    const logOutUser = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                toast.success('logged out successfully')
            })
            .catch(err => {
                toast.error(err.massage)
            })
    }


    // Auth State change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false);
        })
    }, [])

    const authInfo = {
        GoogleAuth,
        createUser,
        user,
        LogInUser,
        logOutUser,
        UpdateUser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;