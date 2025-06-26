// @typescript-eslint/no-explicit-any
"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"; // adjust path if needed
import Image from "next/image";

const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",") || [];
interface Query {
  name: string;
  email: string;
  message: string;
  date: string;
}
export default function ContactForm() {
  const user = useAuth();

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Queries for admin
  const [, setQueries] = useState<Query[]>([]);

  useEffect(() => {
    if (!user) return;
    if (user && adminEmails.includes(user.email)) {
      fetchQueries();
    }
  }, [user]);

  const fetchQueries = async () => {
    try {
      const res = await fetch("/api/sheets?sheet=contact");
      if (!res.ok) {
    console.error("Failed to fetch contact", await res.text());
    return;
  }
      const data = await res.json();
      // console.log("data", data)
      setQueries(data.rows);
    } catch (err) {
      console.error("Failed to load queries", err);
    }
  };

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      await fetch("/api/sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sheet: "contact",
          data: [
            name,
            email,
            message,
            `${String(new Date().getDate()).padStart(2, "0")}/${String(
              new Date().getMonth() + 1
            ).padStart(2, "0")}/${new Date().getFullYear()}`,
          ],
        }),
      });
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  // Normal Contact Form
  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className=" flex justify-center items-center gap-2 text-center text-4xl mx-auto font-bold mb-8 mt-8 md:mt-0">
        <Image src="/icons/icons8-people.gif" alt="gif" className="w-10 h-10" width={40} height={40}/>
        Contact Us
        </h1>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
        rows={5}
      />
      <button
        disabled={loading}
        onClick={handleSubmit}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </main>
  );
}
