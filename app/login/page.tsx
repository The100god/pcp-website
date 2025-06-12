// pages/index.tsx
// @typescript-eslint/no-explicit-any
"use client";
import { useState, useEffect } from "react";
import { auth } from "../../lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";


const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",") || [];

export default function Login() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = useAuth()

  useEffect(()=>{
    if(user) router.push("/home")
  }, [user, router])

  // useEffect(() => {
  //   const unsub = onAuthStateChanged(auth, (user) => {
  //     if (user) router.push("/home");
  //   });
  //   return () => unsub();
  // }, [router]);

  const handleSignup = async () => {
    if (!email || !password || !fullName || !mobile) {
      alert("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: fullName });
      // Save to Google Sheet using fetch

      const isAdmin = adminEmails.includes(email);
      if (!isAdmin) {
    const response = await fetch("/api/sheets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sheet: "pcp",
        data: [fullName, email, mobile, `${String(new Date().getDate()).padStart(2, '0')}/${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`],
      }),
    });
    console.log(response)

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to save to sheet");
    }
    }
      alert("Signup successful!");
      router.push("/home");
    } catch (error: unknown) {
  if (error instanceof Error) {
    alert(error.message);
  } else {
    alert("Signup failed");
  }
} finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/home");
    } catch (error: unknown) {
  console.log("error", error);
  if (error instanceof Error) {
    alert(error.message);
  } else {
    alert("Login failed");
  }
} finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 w-full">
      <div className="max-w-md w-full bg-white p-8 rounded shadow text-inherit">
        <h2 className="text-4xl text-center font-bold mb-6">{isSignup ? "Sign Up" : "Login"}</h2>

        {isSignup && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border p-2 mb-4 rounded"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border p-2 mb-4 rounded"
            />
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-6 rounded"
        />

        <button
          disabled={loading}
          onClick={isSignup ? handleSignup : handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          {loading ? "Please wait..." : isSignup ? "Sign Up" : "Login"}
        </button>

        <p className="mt-4 text-center">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-600 underline cursor-pointer"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
