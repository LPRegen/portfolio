import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
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
  // TODO: Implement top-loader
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
