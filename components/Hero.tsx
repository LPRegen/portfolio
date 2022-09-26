import { Title } from './Heading';
import { Paragraph } from './Paragraph';

export const Hero = () => {
  return (
    <div className="flex flex-col my-24">
      <Paragraph content="Hi, my name is" className="text-sm pb-4 opacity-80" />
      <Title as="h1" className="text-hero pb-4">
        Manuel Escribano.
      </Title>
      <Paragraph
        content="I'm a self taught frontend developer looking to make a positive impact in the life of people through technology."
        className="text-sm opacity-80"
      />
      {/* TODO Add call to action btn */}
    </div>
  );
};
