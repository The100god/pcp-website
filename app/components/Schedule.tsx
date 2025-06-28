"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",") || [];

const classOptions = ["9", "10", "11", "12"];
const subjectOptions = ["Physics", "Chemistry", "Math"];
const dayOptions = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const typeOptions = ["Daily", "Weekly"];

export default function ScheduleAdmin() {
  const router = useRouter();
  const user = useAuth();
  const [entries, setEntries] = useState([]);
  const [filterClass, setFilterClass] = useState("9");

  const [form, setForm] = useState<{
    class: string;
    subject: string;
    teacher: string;
    day: string;
    start: string;
    end: string;
    type: string;
  }>({
    class: "",
    subject: "",
    teacher: "",
    day: "",
    start: "",
    end: "",
    type: "Daily",
  });

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

  const addSchedule = async () => {
    if (!form.teacher || !form.start || !form.end) {
      alert("Fill all fields");
      return;
    }

    try {
      await fetch("/api/sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sheet: "schedule",
          data: [
            form.class,
            form.subject,
            form.teacher,
            form.day,
            form.start,
            form.end,
            form.type,
          ],
        }),
      });

      setForm({ ...form, teacher: "", start: "", end: "" });
      fetchEntries();
    } catch (error) {
      console.error("Failed to add schedule:", error);
    }
  };

  const filtered = entries.filter((row) => row[0] === filterClass);
  console.log(filtered);

  useEffect(() => {
    if (!user) return;

    if (adminEmails.includes(user.email)) {
      fetchEntries();
    } else {
      router.push("/");
    }
    // setLoading(false);
  }, [user, router]);

  if (!user) return <p className="text-center mt-8">Checking access...</p>;

  return (
    <div className="w-full flex flex-col justify-start items-start mx-auto px-1 py-3">
      <h1 className="text-xl md:text-3xl font-bold mb-6">
        Class Schedule Panel
      </h1>

      {/* Add Form */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-100 p-4 rounded mb-6 w-full">
        {/* Class Select */}
        <select
          value={form.class}
          onChange={(e) => setForm({ ...form, class: e.target.value })}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Class</option>
          {classOptions.map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>

        {/* Subject Select */}
        <select
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Subject</option>
          {subjectOptions.map((sub) => (
            <option key={sub}>{sub}</option>
          ))}
        </select>

        {/* Teacher Input */}
        <input
          type="text"
          placeholder="Teacher Name"
          value={form.teacher}
          onChange={(e) => setForm({ ...form, teacher: e.target.value })}
          className="border p-2 rounded w-full"
        />

        {/* Day Select */}
        <select
          value={form.day}
          onChange={(e) => setForm({ ...form, day: e.target.value })}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Day</option>
          {dayOptions.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        {/* Start Time */}
        <input
          type="time"
          value={form.start}
          onChange={(e) => setForm({ ...form, start: e.target.value })}
          className="border p-2 rounded w-full"
        />

        {/* End Time */}
        <input
          type="time"
          value={form.end}
          onChange={(e) => setForm({ ...form, end: e.target.value })}
          className="border p-2 rounded w-full"
        />

        {/* Type Select (Daily/Weekly) */}
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="border p-2 rounded w-full md:col-span-2"
        >
          <option value="">Select Type</option>
          {typeOptions.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>

        {/* Add Button */}
        <button
          onClick={addSchedule}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          Add Schedule
        </button>
      </div>

      {/* Class Filter */}
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <label className="mr-2 font-medium">Filter by Class:</label>
        <div className="flex gap-2">

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
      </div>

      {/* Schedule Table */}
      <div className="w-full overflow-x-auto p-1">
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
