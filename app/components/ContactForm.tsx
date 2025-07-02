// @typescript-eslint/no-explicit-any
"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"; // adjust path if needed
import Image from "next/image";

const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",") || [];
interface Query {
  name: string;
  email: string;
  course: string;
  phone: string;
  message: string;
  date: string;
}
export default function ContactForm() {
  const user = useAuth();

  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
     if (!name || !email || !phone || !course || !message) {
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
            phone,
            email,
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
      setPhone("");
      setEmail("");
      setCourse("");
      setMessage("");
    } catch {
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  // Normal Contact Form
  return (
    <div className="w-full bg-gradient-to-r from-[#611BF8] to-[#7f49f1] text-white">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="text-center mb-12 flex flex-col items-center justify-center">
          <div className="flex items-center gap-3">
            <Image
              src="/icons/icons8-people.gif"
              alt="Contact GIF"
              width={48}
              height={48}
              className="w-12 h-12 "
            />
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          </div>
          <p className="text-primary-100 mt-2">
            Ready to start your journey? Contact us today!
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Enter your phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Course Interest</label>
              <select
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option className="text-black" value="">Select a course</option>
                <option className="text-black" value="neet">NEET-UG</option>
                <option className="text-black" value="jee">IIT-JEE</option>
                <option className="text-black" value="foundation">Foundation</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Tell us about your goals..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-[#611BF8] py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
