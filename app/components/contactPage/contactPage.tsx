// @typescript-eslint/no-explicit-any
"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext"; // adjust path if needed
import Image from "next/image";

const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",") || [];
interface Query {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  date: string;
}
export default function ContactPage() {
  const user = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Queries for admin
  const [queries, setQueries] = useState<Query[]>([]);

  useEffect(() => {
    if (!user) return;
    if (user && adminEmails.includes(user.email)) {
      setIsAdmin(true);
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
      const formatted = data.rows.map((r: string[]) => ({
        name: r[0],
        phone: r[1],
        email: r[2],
        course: r[3],
        message: r[4],
        date: r[5],
      }));
      setQueries(formatted);
    } catch (err) {
      console.error("Failed to load queries", err);
    }
  };
  
  console.log(queries)
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
            phone,
            course,
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

  // Admin Table
  if (isAdmin) {
    return (
      <main className="flex flex-col p-6 mt-10 md:mt-0 w-full">
        <h1 className="flex text-3xl font-bold mb-6 mt-8 md:mt-0">User Queries</h1>
        <div className="overflow-x-auto">

        <table className="w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200 text-black">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Course</th>
              <th className="border px-4 py-2">Message</th>
              <th className="border px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {queries?.length>0 && queries?.map((q, i) => (
              <tr key={i} className="bg-white">
                <td className="border px-4 py-2">{q.name}</td>
                <td className="border px-4 py-2">{q.email}</td>
                <td className="border px-4 py-2">{q.course}</td>
                <td className="border px-4 py-2">{q.phone}</td>
                <td className="border px-4 py-2">{q.message}</td>
                <td className="border px-4 py-2">{q.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      </main>
    );
  }

  // Normal Contact Form
  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className=" flex justify-center items-center gap-2 text-center text-4xl mx-auto font-bold mb-8 mt-8 md:mt-0">
              <Image src="/icons/icons8-people.gif" alt="gif" className="w-10 h-10" width={40} height={40}/>Contact Us</h1>
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
      <input
        type="tel"
        placeholder="Enter Your Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
      />
      <select
                className="w-full p-2 mb-4 rounded border border-black text-black focus:outline-none focus:ring-2 focus:ring-white/50"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option className="text-black" value="">Select a course</option>
                <option className="text-black" value="neet">NEET-UG</option>
                <option className="text-black" value="jee">IIT-JEE</option>
                <option className="text-black" value="foundation">Foundation</option>
              </select>
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
