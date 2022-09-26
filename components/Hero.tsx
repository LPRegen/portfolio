import { Title } from './Heading';
import { Paragraph } from './Paragraph';

export const Hero = () => {
  return (
    <div className="flex flex-col my-24">
      <Paragraph className="text-sm pb-4 opacity-80">Hi, my name is</Paragraph>
      <Title as="h1" className="text-hero pb-4">
        Manuel Escribano.
      </Title>
      <Paragraph className="text-sm opacity-80">
        I am a self taught frontend developer looking to make a positive impact
        in the life of people through technology.
      </Paragraph>
      {/* TODO Add call to action btn */}
    </div>
  );
};
