import { HeadComp } from "components/HeadComp";
import "./globals.css";

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <HeadComp />
      <body>{children}</body>
    </html>
  );
}
