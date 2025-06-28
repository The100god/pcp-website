"use client";
// import { useRouter } from "next/navigation";
// import { useAuth } from "../context/AuthContext";
// import { useEffect } from "react";

export default function Institute() {
  // const user = useAuth();
  // const router = useRouter();
  // useEffect(() => {
  //   if (user === null) {
  //     router.push("/login");
  //   }
  // }, [user, router]);

  const values = [
    {
      title: "🏅 Excellence",
      desc: "We aim to exceed expectations in every aspect of teaching and mentoring.",
    },
    {
      title: "🤝 Integrity",
      desc: "We uphold honesty, transparency, and strong ethics.",
    },
    {
      title: "🎯 Student-Centricity",
      desc: "We provide personalized attention and tailor-made support to every student.",
    },
    {
      title: "🚀 Innovation",
      desc: "We combine modern tools and creative teaching to enrich learning.",
    },
    {
      title: "🌍 Respect & Inclusivity",
      desc: "We create a safe and supportive space for every learner to thrive.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full p-6 bg-gray-50">
      {/* Top Section */}

      <div className="flex flex-col justify-center items-center w-full max-w-6xl mt-12 mb-12 p-4 md:px-8 rounded-2xl">
        <h1 className="relative text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-6">
          <span className="inline-block relative">
            About Our Institute
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 rounded"></span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-center text-gray-700 leading-relaxed max-w-3xl">
          Since our inception in{" "}
          <span className="font-semibold text-blue-700">2025</span>, we’ve been
          committed to nurturing young minds through a{" "}
          <span className="font-medium">
            holistic and empowering educational approach
          </span>
          . Our goal is to foster excellence, curiosity, and confidence in every
          student who walks through our doors.
        </p>
      </div>

      {/* Gateway to JEE/NEET */}
      <section className="w-full max-w-6xl bg-blue-50 rounded-xl shadow-md p-6 md:p-10 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
          🚀 Your Gateway to Crack NEET & JEE: PCP Quality Education
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-800 mb-4">
          At{" "}
          <span className="font-semibold text-blue-800">
            PCP Quality Education
          </span>
          {", we don't just prepare students — we shape achievers. With a legacy of excellence, our"}{" "}
          <span className="font-semibold">renowned faculty</span>, dedicated
          mentors, and professional staff work hand-in-hand to bring out the
          best in every learner.
        </p>
        <p className="italic text-blue-700 font-medium text-center mb-10">
          “Our consistent, top-tier results in NEET and JEE exams speak louder
          than words.”
        </p>
      </section>

      {/* Why Choose PCP */}
      <section className="w-full max-w-6xl bg-blue-50 rounded-xl shadow-md p-6 md:p-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-4">
          🌟 Why Choose PCP Quality Education?
        </h2>
        <p className="text-lg text-center text-gray-700 mb-6">
          Recognized as the{" "}
          <span className="font-semibold">
            best coaching institute in Sikar
          </span>{" "}
          for <span className="text-blue-700 font-medium">JEE</span> and{" "}
          <span className="text-green-700 font-medium">NEET</span>, PCP offers a
          complete ecosystem for academic excellence.
        </p>
        <ul className="list-disc ml-6 md:ml-12 text-gray-700 text-lg space-y-4">
          <li>
            🎓 <span className="font-semibold">Classroom Coaching</span> for:
            <ul className="ml-6 list-disc space-y-1">
              <li>JEE (Main + Advanced)</li>
              <li>NEET / Pre-Medical</li>
              <li>Pre-Foundation (Classes IX to XII)</li>
            </ul>
          </li>
          <li>🏠 Hostel Facilities for outstation students</li>
          <li>
            🚀 Early Lead Programs like:
            <ul className="ml-6 list-disc space-y-1">
              <li>NTSE Preparation</li>
              <li>Olympiad Coaching</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Prince Eduhub */}
      {/* <section className="w-full max-w-6xl bg-white border border-blue-100 rounded-xl p-6 md:p-10 shadow-sm mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-4">
          🤝 A Proud Part of Prince Eduhub
        </h2>
        <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto">
          <span className="font-semibold text-blue-800">PCP Quality Education</span> is a proud sister concern of <span className="text-blue-700 font-semibold">Prince Eduhub</span> — one of India’s most trusted and successful educational groups.
        </p>
        <p className="italic text-blue-700 text-center mt-6 font-medium">
          “Backed by strong fundamentals, visionary leadership, and experienced management, we work with one goal — your success.”
        </p>
      </section> */}

      {/* Core Values */}
      <section className="w-full max-w-6xl bg-blue-50 rounded-xl p-6 md:p-10 shadow-md mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-6">
          💡 Our Core Values: The Foundation of Our Success
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {values.length>0 && values.map((val, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {val.title}
              </h3>
              <p className="text-gray-700">{val.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 italic text-blue-800 font-medium text-center">
          “With these values, we don’t just teach — we inspire and empower.”
        </p>
      </section>
    </div>
  );
}
