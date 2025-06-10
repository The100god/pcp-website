"use client";
import { useRouter } from "next/navigation";
import TeacherCard from "../components/teachersCard/TeacherCard";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const teachers = [
  {
    name: "Mrs. Sharma",
    subject: "Math",
    imageUrl: "/teacher/teacher1.jpg",
    socials: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "Mr. Singh",
    subject: "Science",
    imageUrl: "/teacher/teacher2.jpg",
    socials: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "Ms. Gupta",
    subject: "English",
    imageUrl: "/teacher/teacher3.jpg",
    socials: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "Mrs. Sharma",
    subject: "Math",
    imageUrl: "/teacher/teacher1.jpg",
    socials: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "Mr. Singh",
    subject: "Science",
    imageUrl: "/teacher/teacher2.jpg",
    socials: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "Ms. Gupta",
    subject: "English",
    imageUrl: "/teacher/teacher3.jpg",
    socials: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
    },
  },
];

export default function TeachersPage() {
  const user = useAuth();
    const router = useRouter();
    useEffect(() => {
      if (user === null) {
        router.push("/login");
      }
    }, [user, router]);
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center mt-8 md:mt-0">Our Teachers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {teachers?.map((teacher, index) => (
          <TeacherCard
            key={index} {...teacher}
          />
        ))}
      </div>
    </main>
  );
}
