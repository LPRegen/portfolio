import { Footer } from "components/Footer";
import Navbar from "components/Navbar";

export default async function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainStyle = "mx-4 max-w-4xl sm:mx-8 lg:mx-auto";

  return (
    <>
      <Navbar />
      <main className={mainStyle}>{children}</main>
      <Footer />
    </>
  );
}
