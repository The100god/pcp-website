// pages/user.tsx
// @typescript-eslint/no-explicit-any
"use client";
import { useEffect, useState } from "react";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { userType } from "../context/AuthContext";

const sliderImages = [
  "/slider1.jpg",
  "/slider2.jpg",
  
];

export default function HomePage() {
  const [user, setUser] = useState<userType|null>(null);
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [textColor, setTextColor] = useState('red');

  useEffect(() => {

    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser?.email) {
      setUser({ email: firebaseUser.email }); // now it's always string
    } else {
      setUser(null);
      router.push("/");
    }
  });
    return () => unsub();
  }, [router]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 3000); // every 3 seconds
    return () => clearInterval(interval);
  }, []);

  if (!user) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="w-full">
      {/* Logo + Welcome Text */}
      <div className="flex flex-col gap-y-6 justify-center items-center w-full text-center h-screen md:-mt-3 md:p-3">
        <Image
          src="/pcp-logo.jpg"
          alt="PCP Logo"
          width={200}
          height={200}
          className="mx-auto rounded-full"
        />
        <h1 className="text-6xl md:text-8xl font-bold md:mt-4">Welcome to PCP</h1>
        <p className="text-3xl md:text-4xl text-black">
          {/* "Start the foundation of your dream" */}
          <div
      style={{
        color: textColor,
      }}
    >
      <TypeAnimation
        sequence={[
          'Start the',
          800,
          () => setTextColor('aqua'),
          'Start the foundation of',
          800,
          () => setTextColor('deeppink'),
          'Start the foundation of your dream',
          1000,
          () => setTextColor('darkkhaki'),
          '',
        ]}
        repeat={Infinity}
      />
    </div>
        </p>
      </div>

      {/* Image Slider */}
      <div className="relative flex w-full h-screen justify-center items-center overflow-hidden rounded-xl shadow-lg m-auto pb-6">
        <Image
          src={sliderImages[currentImage]}
          alt={`Slider ${currentImage}`}
          width={400}
          height={200}
          className=" object-center cursor-pointer transition duration-500"
          onClick={() => setModalImage(sliderImages[currentImage])}
        />
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
    </div>
  );
}
