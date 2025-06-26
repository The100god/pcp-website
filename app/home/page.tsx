// pages/user.tsx
// @typescript-eslint/no-explicit-any
"use client";
import {  useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
// import { useAuth } from "../context/AuthContext";
import { InteractiveQuiz } from "../components/interactive-quiz";
import GlowBadge from "../components/GlowBadge";
import Badge from "../components/AnimatedBadge";
import TopMarqueeBanner from "../components/TopMarqueeBanner";
import ContactForm from "../components/ContactForm";
// import { auth } from "../../lib/firebase";
// import { onAuthStateChanged } from "firebase/auth";

const sliderImages = ["/slider1.jpg", "/slider2.jpg"];

export default function HomePage() {
  // const user = useAuth();
  // const router = useRouter();
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [textColor, setTextColor] = useState("red");
  // const [user, setUser] = useState<userType | null>(null);
  // const [currentImage, setCurrentImage] = useState(0);

  // useEffect(() => {
  //   if (user === null) {
  //     router.push("/login");
  //   }
  // }, [user, router]);
  // useEffect(() => {
  //   const unsub = onAuthStateChanged(auth, (firebaseUser) => {
  //     if (firebaseUser?.email) {
  //       setUser({ email: firebaseUser.email }); // now it's always string
  //     } else {
  //       setUser(null);
  //       router.push("/");
  //     }
  //   });
  //   return () => unsub();
  // }, [user, router]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prev) => (prev + 1) % sliderImages.length);
  //   }, 3000); // every 3 seconds
  //   return () => clearInterval(interval);
  // }, []);

  // if (!user) return <p className="text-center mt-8">Loading...</p>;

  const badgeData = [
    { bg: 'bg-amber-100', textColor: 'text-red-400', lines: ['NEET-', 'UG'] },
    { bg: 'bg-emerald-200', textColor: 'text-amber-400', lines: ['IIT-JEE', '(Main + Advance)'] },
    { bg: 'bg-pink-50', textColor: 'text-blue-800', lines: ['11th, 12th', 'Foundation'] },
    { bg: 'bg-blue-50', textColor: 'text-gray-700', lines: ['8th, 9th, 10th', 'Pre-Foundation'] },
    { bg: 'bg-orange-50', textColor: 'text-cyan-700', lines: ['KVPY', '+', 'OLYMPIAD'] },
    { bg: 'bg-cyan-50', textColor: 'text-emerald-800', lines: ['NTSE', '+', 'SCHOOLING'] },
  ];

  return (
    <div className="w-full h-full">
      <div className="mt-10 md:mt-5">

      <TopMarqueeBanner />
      </div>
      {/* Logo + Welcome Text */}
      <div className="flex flex-col gap-y-6 justify-center items-center w-full text-center h-[600px] md:-mt-3 md:p-3">
        
        <Image
          src="/pcp-logo.jpg"
          alt="PCP Logo"
          width={200}
          height={200}
          className="mx-auto rounded-full"
        />
        <h1 className="text-6xl md:text-8xl font-bold md:mt-4">
          Welcome to PCP
        </h1>
        <div className="text-3xl p-2 h-10 md:text-4xl text-black">
          {/* "Start the foundation of your dream" */}
          <div
            style={{
              color: textColor,
            }}
          >
            <TypeAnimation
              sequence={[
                "Start the",
                800,
                () => setTextColor("black"),
                "Start the foundation of",
                800,
                () => setTextColor("black"),
                "Start the foundation of your dream",
                1000,
                () => setTextColor("black"),
                "",
              ]}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col gap-y-6 justify-center items-center w-full text-center md:-mt-3 md:p-3 mb-3"> */}
       {/* Small Screens: Scroll with animation */}
      <div className="block md:hidden snap-y snap-mandatory overflow-y-auto h-[50vh] w-full scrollbar-hide">

        {badgeData.map((data, i) => (
          <Badge key={i} {...data} isAnimated />
        ))}
      </div>

      {/* Medium+ Screens: Grid layout without animation */}
      <div className="hidden md:flex flex-wrap justify-center items-center gap-4 p-4">
        {badgeData.map((data, i) => (
          <Badge key={i} {...data} />
        ))}
      </div>
    {/* </div> */}
      {/* </div> */}
      <div className="flex relative flex-col gap-y-6 justify-center items-center w-full text-center md:mt-11 md:p-3 bg-cyan-50/35">
        <div className="flex justify-around items-center w-full flex-wrap">

        <div className=" flex md:absolute md:top-[150px] md:right-[280px] lg:top-[150px] lg:right-[500px]">
          <GlowBadge lines={['5 Day', 'Demo', 'FREE']}/>
        </div>
        <div className=" flex md:absolute md:top-[250px] md:right-[180px] lg:top-[250px] lg:right-[300px]">
          <GlowBadge lines={['For First', '10 students', '50% off']}/>
        </div>
        <div className=" flex md:absolute md:top-[150px] md:right-[80px] lg:top-[150px] lg:right-[100px]">
          <GlowBadge lines={['Limited', '', 'SEAT']}/>
        </div>
        </div>
        
        <h1 className="flex justify-center items-center gap-2 w-full text-5xl font-bold mb-3"><img src="/icons/why.gif" alt="phone" className="w-20 h-20 bg-transparent"/> Why PCP ? </h1>

        <div className="flex flex-col justify-center items-center w-full">
          <ol className="flex flex-col justify-start items-start text-xl gap-2 list-disc w-full pl-14">
            <li className="text-start">18 Years of Trusted Institute in Jodhpur</li>
            <li className="text-start">Strong Faculty Team</li>
            <li className="text-start">Guidance by IITian</li>
            <li className="text-start">DPP (Daily Practice Problem)</li>
            <li className="text-start">Study Material</li>
            <li className="text-start">Weekly Test</li>
            <li className="text-start">Hostel & Transport Facility</li>
            <li className="text-start">Monthly parent teacher meeting</li>
            <li className="text-start">Scholarship test (get upto 100% scholarship)</li>
          </ol>
        </div>
      </div>

      {/* Image Slider */}
      <div className="relative flex flex-col md:flex-row w-full h-fit md:h-[800px] justify-center items-center gap-6 rounded-xl m-auto p-6">
        {sliderImages?.map((pic, i) => (
          <div
            key={i}
            className="flex justify-center items-center p-4 w-fit h-fit shadow-lg hover:shadow-xl rounded"
          >
            <Image
              src={pic}
              alt={pic}
              width={500}
              height={600}
              className=" object-fill flex w-full md:w-[400px] h-[600px] cursor-pointer"
              onClick={() => setModalImage(pic)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-2 text-white text-2xl bg-black rounded-full px-3 py-1 hover:bg-gray-700"
            >
              &times;
            </button>
            <Image
              src={modalImage}
              alt="Full Image"
              width={900}
              height={600}
              className="rounded-lg max-h-[90vh] w-auto object-contain"
            />
          </div>
        </div>
      )}

      <div className="mt-3">
        <InteractiveQuiz />
      </div>
      <div className="flex justify-center items-center w-full mt-3">
        <ContactForm />
      </div>
    </div>
  );
}
