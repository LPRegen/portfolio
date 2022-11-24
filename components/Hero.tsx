import { CustomLink } from './CustomLink';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';

export const Hero = () => {
  const heroStyles = 'flex flex-col gap-4 my-32 sm:pt-32 sm:gap-6';
  const textStyles = 'opacity-80';
  const contactStyles =
    'bg-primary-200/80 rounded-lg px-4 py-2 text-lg mr-auto my-6 hover:bg-primary-500/70 focus:outline-none focus:ring focus:ring-primary-400';

  return (
    <div className={heroStyles}>
      <Paragraph className={`${textStyles}`}>Hi, my name is</Paragraph>
      <Heading as="h1" className="text-hero font-montserrat">
        Manuel Escribano
      </Heading>
      <Paragraph className={`${textStyles} max-w-[740px]`}>
        Self taught frontend developer making a positive impact in the life of
        people through technology.
      </Paragraph>
      <CustomLink
        href="#contact"
        className={`${contactStyles} font-lato`}
        title={'Contact me'}
      >
        Contact me
      </CustomLink>
    </div>
  );
};
