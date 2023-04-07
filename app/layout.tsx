import { Footer } from "components/Footer";
import { HeadComp } from "components/HeadComp";
import Navbar from "components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <HeadComp />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
