"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import ScheduleAdmin from "../components/Schedule";
import { AnimatePresence, motion } from "framer-motion"; // ✅ Add this

const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",") || [];

export default function AdminPanel() {
  const user = useAuth();
  const [students, setStudents] = useState<string[][]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<"users" | "schedule">("users");
  const router = useRouter();

  useEffect(() => {
    if (!user) return;

    if (adminEmails.includes(user.email)) {
      fetchStudents();
    } else {
      router.push("/");
    }
    setLoading(false);
  }, [user, router]);

  const fetchStudents = async () => {
    const res = await fetch("/api/sheets?sheet=pcp");
    if (!res.ok) {
      console.error("Failed to fetch students", await res.text());
      return;
    }
    const data = await res.json();
    setHeaders(data.headers);
    setStudents(data.rows);
  };

  if (loading)
    return <p className="text-center mt-8">Checking admin access...</p>;
  if (!user || !adminEmails.includes(user.email || "")) return null;

  return (
    <div className="w-full flex flex-col p-4 bg-gray-100">
      <h1 className="flex flex-col md:flex-row justify-center items-center gap-4 text-center text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 mt-10">
        <span className="relative">
          <span className="block">Admin Panel</span>
          <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-300 rounded"></span>
        </span>
      </h1>
      {/* Tabs */}
      <div className="flex space-x-1 mt-4">
        <button
          onClick={() => setActiveTab("users")}
          className={`px-6 py-2 rounded-t-md ${
            activeTab === "users"
              ? "bg-white text-blue-600 font-semibold shadow-md"
              : "bg-gray-200 hover:bg-gray-300 text-gray-600"
          }`}
        >
          User Data
        </button>
        <button
          onClick={() => setActiveTab("schedule")}
          className={`px-6 py-2 rounded-t-md ${
            activeTab === "schedule"
              ? "bg-white text-blue-600 font-semibold shadow-md"
              : "bg-gray-200 hover:bg-gray-300 text-gray-600"
          }`}
        >
          Class Schedule
        </button>
      </div>

      {/* Animated Tab Content */}
      <div className="bg-white p-6 rounded-b shadow-md min-h-[400px] overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === "users" && (
            <motion.div
              key="users"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-2xl font-bold mb-4">User Data</h1>
              <div className="flex px-3 py-1 justify-center items-center bg-green-200 hover:bg-green-400 w-fit rounded">
                <a
                  className="text-blue-600"
                  href={`https://docs.google.com/spreadsheets/d/${process.env.NEXT_PUBLIC_SHEET_ID}/export?format=xlsx`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Excel Sheet
                </a>
              </div>

              <div className="overflow-x-auto mx-auto mt-8">
                <table className="w-full border">
                  <thead>
                    <tr className="bg-gray-200">
                      {headers?.map((h, idx) => (
                        <th key={idx} className="px-4 py-2 border">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {students?.map((row, i) => (
                      <tr key={i} className="even:bg-gray-50">
                        {row?.map((col, j) => (
                          <td key={j} className="border px-4 py-2">
                            {col}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeTab === "schedule" && (
            <motion.div
              key="schedule"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ScheduleAdmin />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
