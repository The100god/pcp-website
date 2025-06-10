"use client"
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export default function Vision() {
  const user = useAuth();
    const router = useRouter();
    useEffect(() => {
      if (user === null) {
        router.push("/login");
      }
    }, [user, router]);
  return (
    <div className="flex flex-col justify-center items-center w-full p-6">
      <div className="flex flex-col justify-center items-center w-[80%] p-5 pb-7 bg-white shadow-md">

      <h1 className="text-4xl md:text-5xl font-bold mb-4 ">Our Vision</h1>
      <p className="flex flex-wrap text-center text-wrap text-lg md:text-xl w-full">&quot;Our school aims to provide quality education for all children, fostering creativity and critical thinking.&quot;</p>
      </div>
    </div>
  );
}
