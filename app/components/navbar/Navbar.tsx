"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../../../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import imag from "../../../public/pcp-logo.jpg"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",") || [];

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const logout = () => {
    signOut(auth);
    router.push("/");
  };
  

  return (
    <nav className="flex flex-col gap-3 md:flex-row justify-center md:justify-between items-center p-4 bg-transparent backdrop-blur-lg text-white fixed w-full z-50 top-0 shadow-sm shadow-emerald-200">
      {!openSidebar && <div className="md:hidden absolute top-8 left-3" onClick={()=>setOpenSidebar(true)}>
        <Bars3Icon className="h-6 w-6 text-black" />
      </div>}
      {openSidebar && <div className="md:hidden absolute top-4 right-3 hover:text-red-400" onClick={()=>setOpenSidebar(false)}>
        <XMarkIcon className="h-6 w-6 text-black" />
      </div>}
      <Link href="/" className="font-bold text-2xl">
        <img className="w-15 h-15 rounded-full" src="/pcp-logo.jpg" alt="pcp" />
      </Link>
      <div className="hidden md:flex space-x-4">
        <Link href="/vision" className="px-2 py-1 bg-green-400 hover:bg-green-300 font-medium text-black rounded">Vision</Link>
        <Link href="/teachers" className="px-2 py-1 bg-green-400 hover:bg-green-300 font-medium text-black rounded">Teachers</Link>
        <Link href="/institute" className="px-2 py-1 bg-green-400 hover:bg-green-300 font-medium text-black rounded">About us</Link>
        <Link href="/contact" className="px-2 py-1 bg-green-400 hover:bg-green-300 font-medium text-black rounded">Contact</Link>
        {user ? (
          <>
            <Link href="/home" className="px-2 py-1 bg-green-400 hover:bg-green-300 font-medium text-black rounded">Dashboard</Link>
            {adminEmails.includes(user.email) && <Link href="/admin" className="px-2 py-1 bg-green-400 hover:bg-green-300 font-medium text-black rounded">Admin</Link>}
            <button onClick={logout} className="ml-2 bg-red-500 py-1 px-2 rounded cursor-pointer">Logout</button>
          </>
        ) : (
          <Link href="/">Login</Link>
        )}
      </div>
      {/* Mobile Nav Dropdown */}
      {openSidebar && (
        <div className="absolute top-20 mt-2 w-full px-6 md:hidden flex flex-col items-start bg-white text-black py-4 rounded-b-md shadow-md z-30">
          <Link href="/vision" className="mobile-link py-2 hover:bg-green-300" onClick={() => setOpenSidebar(false)}>Vision</Link>
          <Link href="/teachers" className="mobile-link py-2 hover:bg-green-300" onClick={() => setOpenSidebar(false)}>Teachers</Link>
          <Link href="/institute" className="mobile-link py-2 hover:bg-green-300" onClick={() => setOpenSidebar(false)}>About us</Link>
          <Link href="/contact" className="mobile-link py-2 hover:bg-green-300" onClick={() => setOpenSidebar(false)}>Contact</Link>
          {user ? (
            <>
              <Link href="/home" className="mobile-link py-2 hover:bg-green-300" onClick={() => setOpenSidebar(false)}>Dashboard</Link>
              {adminEmails.includes(user.email) && (
                <Link href="/admin" className="mobile-link py-2 hover:bg-green-300" onClick={() => setOpenSidebar(false)}>Admin</Link>
              )}
              <button onClick={() => { logout(); setOpenSidebar(false); }} className="text-red-600 font-semibold mt-2">Logout</button>
            </>
          ) : (
            <Link href="/" className="mobile-link" onClick={() => setOpenSidebar(false)}>Login</Link>
          )}
        </div>
      )}
    </nav>
  );
}
