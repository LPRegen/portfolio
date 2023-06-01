import { Footer } from "components/Footer";
import Navbar from "components/Navbar";

export default async function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainStyle = "mx-4 max-w-3xl sm:mx-8 md:mx-auto";

  return (
    <>
      <Navbar />
      <main className={mainStyle}>{children}</main>
      <Footer />
    </>
  );
}
