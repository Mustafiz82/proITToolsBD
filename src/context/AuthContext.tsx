"use client"
import { GoogleAuthProvider, signInWithPopup , User, UserCredential} from 'firebase/auth';

import React, { createContext, ReactNode, useState } from 'react';
import { auth } from '../../firebase.config';   

interface containerProps {
    children : React.ReactNode 
}

interface AuthProps {
    user : User | null ;
    handleGoogleSignIn : () => Promise<UserCredential> ;
}

export const AuthContext = createContext<AuthProps | null>(null)

 const AuthProvider = ({children}:containerProps) => {


    const [user , setUser] = useState(null)


    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }


    const object = {
        handleGoogleSignIn,
        setUser , 
        user,
    }

    return <AuthContext.Provider value={object}>
        {children}
    </AuthContext.Provider>
};


export default AuthProvider