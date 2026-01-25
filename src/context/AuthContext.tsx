"use client";
import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";

import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import { useRouter } from "next/navigation";  

interface containerProps {
  children: React.ReactNode;
}

interface AuthProps {
  user: User | null;
  AuthLoading: boolean;
  handleGoogleSignIn: () => Promise<UserCredential>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  handleSignUp: (email: string, password: string) => Promise<UserCredential>;
  handleSignIn: (email: string, password: string) => Promise<UserCredential>;
  handleUpdateProfile: (
    name: string,
    photoURL?: string | undefined
  ) => Promise<void>;
  handleLogout: () => void;
}

export const AuthContext = createContext<AuthProps | null>(null);

const AuthProvider = ({ children }: containerProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, SetLoading] = useState(true);
  const router = useRouter();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    provider.addScope("email");
    provider.addScope("profile");

    console.log(auth);
    return signInWithRedirect(auth, provider);
  };

  const handleSignUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSignIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleUpdateProfile = (name: string, photoURL?: string) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
    } else {
      return Promise.reject(new Error("User Not Found"));
    }
  };  

  const handleLogout = () => {
    SetLoading(true);
    signOut(auth).then(() => {
      console.log("User Logged Out");
      SetLoading(false);
      setUser(null);
    });
  };

  useEffect(() => {
    console.log("Checking for redirect result...");
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          console.log("SUCCESS! User created:", result.user);
          setUser(result.user);
          router.push("/");
          SetLoading(false);
        } else {
          console.log("No redirect result found (or token already used).");
        }
      })
      .catch((error) => {
        console.error("FAILED to create user:", error.code, error.message);
      });
  }, []);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        localStorage.setItem("isLoggedIn" , "true")
      }
      else{
        localStorage.setItem("isLoggedIn" , "false")
      }
      SetLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const object = {
    handleGoogleSignIn,
    handleSignUp,
    handleSignIn,
    setUser,
    handleUpdateProfile,
    user,
    AuthLoading: loading,
    handleLogout: handleLogout,
  };

  return <AuthContext.Provider value={object}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
