import { Footer } from "components/Footer";
import Navbar from "components/Navbar";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainStyle =
    "grid grid-rows-auto gap-16 mx-4 max-w-3xl sm:mx-8 lg:mx-auto";

  return (
    <>
      <Navbar />
      <main className={mainStyle}>{children}</main>
      <Footer />
    </>
  );
}
