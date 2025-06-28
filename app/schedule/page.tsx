"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const classOptions = ["9", "10", "11", "12"];


export default function Schedule() {
  const router = useRouter();
  const user = useAuth();
  const [entries, setEntries] = useState([]);
  const [filterClass, setFilterClass] = useState("9");

  const fetchEntries = async () => {
    try {
      const res = await fetch("/api/sheets?sheet=schedule");
      const data = await res.json();
      setEntries(data.rows);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch schedule:", error);
    }
  };

  const filtered = entries.filter((row) => row[0] === filterClass);
  console.log(filtered);

  useEffect(() => {
    if (!user){
        router.push("/");
    }else{
        fetchEntries();
    }
    // setLoading(false);
  }, [user, router]);

  if (!user) return <p className="text-center mt-8">Checking access...</p>;

  return (
    <div className="w-full mx-auto mt-6 p-6">
      <h1 className="text-3xl font-bold mb-6">Class Schedule</h1>

      {/* Class Filter */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by Class:</label>
        {classOptions.map((cls) => (
          <button
            key={cls}
            onClick={() => setFilterClass(cls)}
            className={`px-3 py-1 border rounded mx-1 ${
              filterClass === cls ? "bg-blue-600 text-white" : "bg-white"
            }`}
          >
            {cls}
          </button>
        ))}
      </div>

      {/* Schedule Table */}
      <div className=" overflow-x-auto p-2">
        <table className="w-full border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Class</th>
              <th className="p-2 border">Subject</th>
              <th className="p-2 border">Teacher</th>
              <th className="p-2 border">Day</th>
              <th className="p-2 border">Start</th>
              <th className="p-2 border">End</th>
              <th className="p-2 border">Type</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row: string[], i: number) => (
              <tr key={i} className="even:bg-gray-50">
                {row.map((cell: string, j: number) => (
                  <td key={j} className="p-2 border">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="mt-4 text-gray-500">
            No schedules found for Class {filterClass}
          </p>
        )}
      </div>
    </div>
  );
}
