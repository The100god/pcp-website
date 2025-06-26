import Link from "next/link";

// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Institute Address</h3>
          <p>PCP (Pragati Career Point)</p>
          <p>2-A-3, opp. Ambedker park</p>
          <p>Pratap Nagar, Jodhpur - 342003</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="flex items-center justify-start gap-1"><img src="/icons/phone.gif" alt="phone" className="w-8 h-8 bg-transparent"/> +91 7851902551</p>
          <p className="flex items-center justify-start gap-1"><img src="/icons/phone.gif" alt="phone" className="w-8 h-8 bg-transparent"/> +91 8107828143</p>
          <p className="flex items-center justify-start gap-4"><img src="/icons/mail.gif" alt="phone" className="w-6 h-6 bg-transparent"/> pcpqualityeducation@gmail.com</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="/home" className="hover:underline">Home</Link></li>
            <li><Link href="/institute" className="hover:underline">About Us</Link></li>
            <li><Link href="/vision" className="hover:underline">Vision</Link></li>
            <li><Link href="/teachers" className="hover:underline">Teachers</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
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
