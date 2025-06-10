import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ClientThemeProvider from "./components/ClientThemeProvider/ClientThemeProvider";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PCP (Pragati Career Point)",
  description: "Start the foundation of your dream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

<ClientThemeProvider>
  <div className="flex flex-col min-h-screen">

        <AuthProvider>
        <Navbar />
        <div className="flex flex-grow w-full h-full mt-14 md:mt-20">

        {children}
        </div>
        <Footer />
        </AuthProvider>
  </div>
</ClientThemeProvider>
      </body>
    </html>
  );
}
