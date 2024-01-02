'use client'

import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, User as firebaseUser } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { doc, onSnapshot } from 'firebase/firestore';
import UserContext from './UserContext';

export interface UserData {
    username: string;
    email: string;
    followers: string[];
    following: string[];
    services: string[];
    reviews: string[];
    bio: string;
    pfp: string;
    uid: string;
}

export interface AuthState {
    userData: UserData | null;
}

interface AuthProviderProps {
    children: React.ReactNode;
}


export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<AuthState>({ userData: null });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user: firebaseUser | null) => {
            try {
                if (user) {
                    const uid = user.uid;
                    const userRef = doc(db, 'users', uid);
                    const unsubscribeUser = onSnapshot(userRef, (doc) => {
                        const userData = doc.exists() ? {...doc.data(), uid} as UserData : null;
                        setUser({ userData });
                    });
                    return () => unsubscribeUser();
                } else {
                    setUser({ userData: null});
                    return () => {};
                }
            } catch (error) {
                console.log("Error getting user data: ", error);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
} 