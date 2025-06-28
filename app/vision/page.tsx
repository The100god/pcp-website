"use client"
// import { useRouter } from "next/navigation";
// import { useAuth } from "../context/AuthContext";
// import { useEffect } from "react";

import Image from "next/image";

export default function Vision() {
  // const user = useAuth();
  //   const router = useRouter();
  //   useEffect(() => {
  //     if (user === null) {
  //       router.push("/login");
  //     }
  //   }, [user, router]);

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
    <div className="flex flex-col justify-center items-center w-full p-6">
      <div className="flex flex-col justify-center items-center w-[100%] p-5 pb-7 bg-white shadow-md">
        <h1 className="flex flex-col md:flex-row justify-center items-center gap-4 text-center text-4xl md:text-5xl font-extrabold text-blue-900 mb-10 mt-10">
          <span className="relative">
            <span className="block">Our Vision</span>
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-300 rounded"></span>
          </span>
          <Image
            src="/icons/goal.gif"
            alt="goal gif"
            className="w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-transform duration-300"
            width={80}
            height={80}
          />
        </h1>

        <section className="bg-gray-50 text-gray-800">
          {/* Vision */}
          <div className="py-8 px-4 md:px-20 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-900">
             Empowering Minds, Transforming Futures
            </h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto text-center leading-relaxed">
              At{" "}
              <span className="font-semibold text-blue-800">
                PCP Quality Education
              </span>
              , we imagine a future where every student is empowered with the{" "}
              <span className="font-semibold">
                knowledge, confidence, and mindset
              </span>{" "}
              to succeed—not just in competitive exams like{" "}
              <span className="text-blue-700 font-medium">JEE</span> and{" "}
              <span className="text-green-700 font-medium">NEET</span>, but in
              life itself.
            </p>
            <ul className="list-disc text-lg text-gray-600 mt-6 ml-6 md:ml-20 space-y-2">
              <li>Nurturing talent</li>
              <li>Building confidence</li>
              <li>Fostering long-term academic and career success</li>
            </ul>
            <p className="mt-6 italic text-blue-800 font-medium text-center">
              “We don’t just teach students — we empower them to achieve their
              dreams.”
            </p>
          </div>

          {/* Mission */}
          <div className="py-12 px-4 md:px-20 bg-blue-50">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-900">
              🎓 Our Mission: Delivering Excellence in JEE & NEET Coaching
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
              Our mission at{" "}
              <span className="font-semibold text-blue-800">
                PCP Quality Education
              </span>{" "}
              is to deliver{" "}
              <span className="font-semibold">exceptional coaching</span> and
              unwavering support to students aspiring for{" "}
              <span className="text-blue-700">JEE</span> and{" "}
              <span className="text-green-700">NEET</span>.
            </p>

            <ul className="list-disc text-lg text-gray-600 mt-6 ml-6 md:ml-20 space-y-2">
              <li>Structured curriculum tailored for competitive success</li>
              <li>Highly experienced and passionate faculty</li>
              <li>Engaging, tech-driven teaching methods</li>
            </ul>

            <p className="mt-6 italic text-blue-800 font-medium text-center">
              “We don’t just prepare students for exams — we prepare them to
              stand out in a competitive world.”
            </p>
          </div>

          {/* Values */}
          <div className="py-12 px-4 md:px-20 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-900">
              💡 Our Core Values: The Foundation of Our Success
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
              {values.length>0 && values.map((val, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-gray-700">{val.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 italic text-blue-800 font-medium text-center">
              “With these values, we don’t just teach — we inspire and empower.”
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
