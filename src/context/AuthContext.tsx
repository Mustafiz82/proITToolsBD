"use client"
import { createUserWithEmailAndPassword,  GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup , signInWithRedirect, updateProfile, User, UserCredential} from 'firebase/auth';

import React, { createContext, useState } from 'react';
import { auth } from '../../firebase.config';   

interface containerProps {
    children : React.ReactNode 
}

interface AuthProps {
    user : User | null ;
    handleGoogleSignIn : () => Promise<UserCredential> ;
    setUser : React.Dispatch<React.SetStateAction<User | null>>
    handleSignUp :(email: string, password: string) => Promise<UserCredential>
    handleSignIn: (email: string, password: string) => Promise<UserCredential>
    handleUpdateProfile: (name: string, photoURL?: string | undefined) => Promise<void>
}

export const AuthContext = createContext<AuthProps | null>(null)

 const AuthProvider = ({children}:containerProps) => {


    const [user , setUser] = useState<User| null>(null)


    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth , provider)
    }

    const handleSignUp = (email:string , password:string) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }


    const handleSignIn = (email : string , password : string) => {
        return signInWithEmailAndPassword(auth , email , password )
    }


    const handleUpdateProfile = (name : string , photoURL? : string) => {

        if(auth.currentUser) {
            return updateProfile(auth.currentUser , {
                displayName : name , 
                photoURL : photoURL
            })
        }
        else {
            return Promise.reject(new Error("User Not Found"))
        }
    }



    // useEffect(() => {

    //     const getUser  = async () => {
    //         const result = await getRedirectResult(auth);
    //         console.log(result)
    //     }

    //     getUser()

    // } , [])



    const object = {
        handleGoogleSignIn,
        handleSignUp ,
        handleSignIn,
        setUser , 
        handleUpdateProfile,
        user,
    }

    return <AuthContext.Provider value={object}>
        {children}
    </AuthContext.Provider>
};


export default AuthProvider