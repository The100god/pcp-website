"use client";

import Image from "next/image";

type TeacherProps = {
  name: string;
  subject: string;
  imageUrl: string;
  description: string;
  experience: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
};

export default function TeacherCard({
  name,
  subject,
  imageUrl,
  description,
  experience,
  socials,
}: TeacherProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 max-w-xs w-full">
      {/* Image Section with Overlay and Subject Badge */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${name} profile`}
          width={400}
          height={320}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
          {subject}
        </div>
      </div>

      {/* Details */}
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-blue-600 font-semibold mb-3 italic">{experience}</p>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

        {/* Social Icons */}
        {(socials?.facebook || socials?.twitter || socials?.instagram) && (
          <div className="flex justify-center space-x-4">
            {socials?.facebook && (
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-100 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <i className="fa-brands fa-facebook text-blue-600 group-hover:text-white"></i>
              </a>
            )}
            {socials?.twitter && (
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sky-200 hover:bg-sky-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <i className="fa-brands fa-twitter text-sky-600 group-hover:text-white"></i>
              </a>
            )}
            {socials?.instagram && (
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-200 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <i className="fa-brands fa-instagram text-pink-600 group-hover:text-white"></i>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
