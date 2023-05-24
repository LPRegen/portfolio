import { Metadata } from "next";
import { Footer } from "components/Footer";
import Navbar from "components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manuel Escribano, Frontend web developer",
  applicationName: `LPRegen's portfolio`,
  keywords: [
    "Manuel",
    "Escribano",
    "Frontend",
    "Web",
    "Developer",
    "Desarrollador",
    "Freelance",
    "html",
    "css",
    "javascript",
    "react",
    "js",
    "tailwind",
    "typescript",
    "ts",
    "next",
  ],
  authors: [{ name: "Manuel Escribano" }],
  creator: "Manuel Escribano",
  publisher: "Manuel Escribano",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainStyle = "mx-4 max-w-4xl sm:mx-8 lg:mx-auto";
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className={mainStyle}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
