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


// "use client";

// import React, {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
// } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../lib/firebase"; // Adjust as needed

// export interface UserType {
//   email: string;
// }

// interface AuthContextType {
//   user: UserType | null;
//   setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
// }

// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   setUser: () => {},
// });

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<UserType | null>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//       if (firebaseUser?.email) {
//         setUser({ email: firebaseUser.email });
//       } else {
//         setUser(null);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // ✅ use this in components
// export const useAuth = () => useContext(AuthContext);
