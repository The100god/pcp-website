// app/context/AuthContext.tsx
// @typescript-eslint/no-explicit-any
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase"; // adjust if your path differs

export interface userType {
  email: string;
}
interface AuthContextType {
  user: userType | null;
}

const AuthContext = createContext<AuthContextType>({ user: null });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<userType |null>(null);

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser?.email) {
      setUser({ email: firebaseUser.email }); // now it's always string
    } else {
      setUser(null);
    }
  });
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext).user;
