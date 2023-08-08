import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

export const Hero = () => {
  const heroStyle = "flex flex-col gap-4 my-32 sm:pt-32 sm:gap-6";
  const textStyle = "opacity-80";
  const contactStyle =
    "bg-primary-200/80 rounded-lg px-4 py-2 text-lg mr-auto my-6 hover:bg-primary-500/70 focus:outline-none focus:ring focus:ring-primary-400";

  return (
    <div className={heroStyle}>
      <Paragraph className={`${textStyle}`}>Hi, my name is</Paragraph>
      <Heading as="h1" className="font-montserrat text-hero">
        Manuel Escribano
      </Heading>
      <Paragraph className={`${textStyle} max-w-[740px]`}>
        Web Developer - React Js | Next Js | TypeScript
      </Paragraph>
      <a
        href="#contact"
        className={`${contactStyle} font-lato`}
        title={"Contact me"}
      >
        Contact me
      </a>
    </div>
  );
};
