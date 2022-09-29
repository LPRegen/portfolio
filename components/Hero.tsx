import Link from 'next/link';
import { Title } from './Heading';
import { Paragraph } from './Paragraph';

export const Hero = () => {
  const contactStyles =
    'bg-primary-200/80 rounded-lg px-4 py-2 text-lg mr-auto my-6 hover:bg-primary-500/70 focus:outline-none focus:ring focus:ring-primary-400';

  return (
    <div className="flex flex-col my-32">
      <Paragraph className="text-sm pb-4 opacity-80">Hi, my name is</Paragraph>
      <Title as="h1" className="text-hero pb-4">
        Manuel Escribano.
      </Title>
      <Paragraph className="text-sm opacity-80">
        I am a self taught frontend developer looking to make a positive impact
        in the life of people through technology.
      </Paragraph>
      <div className="flex gap-8 flex-col">
        <Link href="#contact">
          <a className={contactStyles}>Contact me</a>
        </Link>
      </div>
    </div>
  );
};
