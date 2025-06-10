"use client"
import { useRouter } from "next/navigation";
import ContactPage from "../components/contactPage/contactPage";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export default function Contact() {
  const user = useAuth();
    const router = useRouter();
    useEffect(() => {
      if (user === null) {
        router.push("/login");
      }
    }, [user, router]);
  return (
    <div className="flex justify-center items-center w-full">
      <ContactPage/>
    </div>
    
  );
}



