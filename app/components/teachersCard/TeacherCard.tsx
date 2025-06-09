// app/components/teachersCard/TeacherCard.tsx
"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import Image from "next/image";

type TeacherProps = {
  name: string;
  subject: string;
  imageUrl: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
};

export default function TeacherCard({ name, subject, imageUrl, socials }: TeacherProps) {
  return (
    <Card className="w-80 shadow-lg" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <CardHeader className="h-64 overflow-hidden" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Image src={imageUrl} alt={`${name}'s profile`} className="w-full h-full object-cover" />
      </CardHeader>
      <CardBody className="text-center" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Typography variant="h5" color="blue-gray" className="mb-2" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {subject}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-6" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {socials?.facebook && (
          <Tooltip content="Facebook">
            <Typography as="a" href={socials.facebook} target="_blank" rel="noopener noreferrer" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fab fa-facebook text-blue-600 text-lg" />
            </Typography>
          </Tooltip>
        )}
        {socials?.twitter && (
          <Tooltip content="Twitter">
            <Typography as="a" href={socials.twitter} target="_blank" rel="noopener noreferrer" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fab fa-twitter text-sky-500 text-lg" />
            </Typography>
          </Tooltip>
        )}
        {socials?.instagram && (
          <Tooltip content="Instagram">
            <Typography as="a" href={socials.instagram} target="_blank" rel="noopener noreferrer" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fab fa-instagram text-pink-600 text-lg" />
            </Typography>
          </Tooltip>
        )}
      </CardFooter>
    </Card>
  );
}
