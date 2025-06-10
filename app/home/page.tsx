// pages/user.tsx
// @typescript-eslint/no-explicit-any
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useAuth } from "../context/AuthContext";
import ContactPage from "../components/contactPage/contactPage";
// import { auth } from "../../lib/firebase";
// import { onAuthStateChanged } from "firebase/auth";

const sliderImages = ["/slider1.jpg", "/slider2.jpg"];

export default function HomePage() {
  const user = useAuth();
  const router = useRouter();
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [textColor, setTextColor] = useState("red");
  // const [user, setUser] = useState<userType | null>(null);
  // const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (user === null) {
      router.push("/");
    }
  }, [user, router]);
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

  if (!user) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="w-full h-full">
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
                () => setTextColor("aqua"),
                "Start the foundation of",
                800,
                () => setTextColor("deeppink"),
                "Start the foundation of your dream",
                1000,
                () => setTextColor("darkkhaki"),
                "",
              ]}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="relative flex flex-col md:flex-row w-full h-fit md:h-[800px] justify-center items-center gap-6 rounded-xl m-auto p-6">
        {sliderImages?.map((pic, i)=>(
          <div key={i} className="flex justify-center items-center p-4 w-fit h-fit shadow-lg hover:shadow-xl rounded">

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

      <div className="flex justify-center items-center w-full mt-3">
        <ContactPage/>
      </div>
    </div>
  );
}
