"use client"
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup , signInWithRedirect, User, UserCredential} from 'firebase/auth';

import React, { createContext, ReactNode, useState } from 'react';
import { auth } from '../../firebase.config';   

interface containerProps {
    children : React.ReactNode 
}

interface AuthProps {
    user : User | null ;
    handleGoogleSignIn : () => Promise<UserCredential> ;
    setUser : React.Dispatch<React.SetStateAction<User | null>>
    handleSignUp :(email: string, password: string) => Promise<UserCredential>
}

export const AuthContext = createContext<AuthProps | null>(null)

 const AuthProvider = ({children}:containerProps) => {


    const [user , setUser] = useState<User| null>(null)


    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        // return signInWithPopup(auth, provider)
        return signInWithRedirect(auth , provider)
    }


    const handleSignUp = (email:string , password:string) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }



    const object = {
        handleGoogleSignIn,
        handleSignUp ,
        setUser , 
        user,
    }

    return <AuthContext.Provider value={object}>
        {children}
    </AuthContext.Provider>
};


export default AuthProvider