"use client";
// import { useRouter } from "next/navigation";
import TeacherCard from "../components/teachersCard/TeacherCard";
// import { useAuth } from "../context/AuthContext";
// import { useEffect } from "react";

const teachers = [
  {
    name: "Mrs. Sharma",
    subject: "Math",
    imageUrl: "/teacher/teacher1.jpg",
    description: "Passionate about connecting students to the wonders of life science.",
    experience: "10+ years of NEET mentoring",
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
    description: "Passionate about connecting students to the wonders of life science.",
    experience: "10+ years of NEET mentoring",
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
    description: "Passionate about connecting students to the wonders of life science.",
    experience: "10+ years of NEET mentoring",
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
    description: "Passionate about connecting students to the wonders of life science.",
    experience: "10+ years of NEET mentoring",
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
    description: "Passionate about connecting students to the wonders of life science.",
    experience: "10+ years of NEET mentoring",
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
    description: "Passionate about connecting students to the wonders of life science.",
    experience: "10+ years of NEET mentoring",
    socials: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
    },
  },
];

export default function TeachersPage() {
  // const user = useAuth();
  //   const router = useRouter();
  //   useEffect(() => {
  //     if (user === null) {
  //       router.push("/login");
  //     }
  //   }, [user, router]);
  return (
    <main className="max-w-6xl mx-auto p-6">
  <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-blue-900 mt-10">
    Meet Our Expert Teachers
  </h1>

  <p className="text-center max-w-3xl mx-auto text-gray-700 text-lg mb-12">
    At <span className="font-semibold text-blue-700">PCP Quality Education</span>, our teachers are more than educators — they are mentors, motivators, and guides. With years of proven success in JEE and NEET coaching, they bring dedication and expertise to every class.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
    {teachers.length>0 && teachers.map((teacher, index) => (
      <TeacherCard key={index} {...teacher} />
    ))}
  </div>
</main>

  );
}
