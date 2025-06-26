"use client";
// components/CallModal.tsx
import { useState } from "react";

export default function CallModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Call Icon */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg z-50"
        aria-label="Open contact modal"
      >
        <img
          src="/icons/call.gif"
          alt="phone"
          className="md:w-16 w-6 md:h-16 h-6 bg-transparent rounded-full"
        />
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
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
                {" "}2-A-3, opp. Ambedker park, Pratap Nagar, Jodhpur - 342003
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
