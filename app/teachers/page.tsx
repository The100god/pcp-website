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
    <main className="py-16 px-4 sm:px-8 w-full">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-6">
        Meet Our Expert Teachers
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6"></div>
      <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
        At <span className="font-bold text-blue-700">PCP Quality Education</span>, our teachers are more than educators — they are mentors, motivators, and guides. With years of proven success in JEE and NEET coaching, they bring dedication and expertise to every class.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
      {teachers.map((teacher, index) => (
        <TeacherCard key={index} {...teacher} />
      ))}
    </div>
  </div>
</main>


  );
}
