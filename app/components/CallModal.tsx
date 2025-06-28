"use client";
import Image from "next/image";
// components/CallModal.tsx
import { useState } from "react";

export default function CallModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Call Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 cursor-pointer bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg z-50"
        aria-label="Open contact modal"
      >
        <Image
          src="/icons/call.gif"
          alt="phone"
          className="md:w-16 w-6 md:h-16 h-6 bg-transparent rounded-full"
          width={0} height={0}
        />
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 backdrop-blur-lg bg-opacity-50 flex items-center justify-center z-40">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 font-medium text-xl cursor-pointer px-2 py-1 rounded-lg"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>

            <div className="space-y-2 text-gray-800">
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+918107828143" className="text-blue-600">
                  +91 8107828143
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+917851902551" className="text-blue-600">
                  +91 7851902551
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:pcpqualityeducation@gmail.com"
                  className="text-blue-600"
                >
                  pcpqualityeducation@gmail.com{" "}
                </a>
              </p>
              <p>
                <strong>Address:</strong>
                <a
            href="https://www.google.com/maps/place/Ambedkar+Park+and+Vishwanath+Mahadev+Mandir/@26.2862184,72.9913678,17z/data=!3m1!4b1!4m6!3m5!1s0x39418dd57a3baec9:0xa0141c323fb4380!8m2!3d26.2862184!4d72.9939427!16s%2Fg%2F1hm55f0bn?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-start hover:underline transition-all duration-200"
          >

           {" "}2-A-3, opp. Ambedker park, Pratap Nagar, Jodhpur - 342003
          </a>
              </p>
              <p>
                <strong>Timing:</strong> Mon–Sat, 5pm–9pm
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
