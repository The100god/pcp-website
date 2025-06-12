// @typescript-eslint/no-explicit-any
"use client";
import { useEffect, useState } from "react";
// import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";
// import { User } from "firebase/auth";
import { useAuth } from "../context/AuthContext";

const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",") || [];

export default function AdminPanel() {
const user = useAuth();
  const [students, setStudents] = useState<string[][]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  // useEffect(() => {
  //   const unsub = auth.onAuthStateChanged((u) => {
  //     setUser(u);
  //     if (u && adminEmails.includes(u.email || "")) {
  //       fetchStudents();
  //     } else {
  //       router.push("/");
  //     }
  //     setLoading(false);
  //   });
  //   return () => unsub();
  // }, [router]);
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

  if (loading) return <p className="text-center mt-8">Checking admin access...</p>;

  if (!user || !adminEmails.includes(user.email || "")) return null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 mt-8 md:mt-0">Admin Panel</h1>
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
    </div>
  );
}
