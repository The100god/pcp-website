import Image from "next/image";
import Link from "next/link";

// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Institute Address</h3>
          <a
            href="https://www.google.com/maps/place/Ambedkar+Park+and+Vishwanath+Mahadev+Mandir/@26.2862184,72.9913678,17z/data=!3m1!4b1!4m6!3m5!1s0x39418dd57a3baec9:0xa0141c323fb4380!8m2!3d26.2862184!4d72.9939427!16s%2Fg%2F1hm55f0bn?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-start hover:underline transition-all duration-200"
          >
            PCP (Pragati Career Point)
            <br />
            2-A-3, opp. Ambedker park
            <br />
            Pratap Nagar, Jodhpur - 342003
          </a>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="flex items-center justify-start gap-1">
            <Image
              src="/icons/phone.gif"
              alt="phone"
              className="w-8 h-8 bg-transparent"
              width={32}
              height={32}
            />{" "}
            <a href="tel:+917851902551" className=" decoration-0">
              +91 7851902551
            </a>
          </p>
          <p className="flex items-center justify-start gap-1">
            <Image
              src="/icons/phone.gif"
              alt="phone"
              className="w-8 h-8 bg-transparent"
              width={32}
              height={32}
            />{" "}
            <a href="tel:+918107828143" className="decoration-0">
              +91 8107828143
            </a>
          </p>
          <p className="flex items-center justify-start gap-4">
            <Image
              src="/icons/mail.gif"
              alt="phone"
              className="w-6 h-6 bg-transparent"
              width={24}
              height={24}
            />{" "}
            <a
              href="mailto:pcpqualityeducation@gmail.com"
              className="decoration-0"
            >
              pcpqualityeducation@gmail.com{" "}
            </a>
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/home" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/institute" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/vision" className="hover:underline">
                Vision
              </Link>
            </li>
            <li>
              <Link href="/teachers" className="hover:underline">
                Teachers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Optional: Social or Extra Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">More Info</h3>
          <p>Mon – Sat: 5 PM – 9 PM</p>
          <p>Closed on Sundays</p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4 text-sm">
        All rights reserved © 2025 pcp Institute.
      </div>
    </footer>
  );
}
