import { Footer } from "./Footer";
import { HeadComp } from "./Head";
import Navbar from "./Navbar";

interface LayoutProps {
  variant: "portfolio" | "blog" | "article";
  children: React.ReactNode;
}

export const Layout = ({ variant, children }: LayoutProps) => {
  const styles = {
    portfolio:
      "flex flex-col gap-44 mx-8 pt-24 sm:mx-16 sm:gap-56 md:mx-28 md:gap-64 lg:mx-36 lg:gap-80 xl:mx-56 2xl:mx-64",
    blog: "flex flex-col gap-12 mx-8 pt-24 sm:mx-16 sm:gap-16 md:mx-28 md:gap-32 lg:mx-36 lg:gap-48 xl:mx-56 2xl:mx-64",
    article:
      "flex flex-col mx-8 pt-24 sm:mx-16 md:mx-28 lg:mx-36 xl:mx-56 2xl:mx-64",
  };
  return (
    <>
      <HeadComp />
      <Navbar />
      <div className={styles[variant]}>{children}</div>
      <Footer />
    </>
  );
};
