import { Title } from './Heading';
import { Paragraph } from './Paragraph';

export const Hero = () => {
  return (
    <div className="flex flex-col my-24">
      <Paragraph content="Hi, my name is" className="text-sm pb-2 opacity-80" />
      <Title as="h1" content="Manuel Escribano." className="text-[35px] pb-2" />
      <Paragraph
        content="I'm a self taught frontend developer looking to make a positive impact in the life of people through technology."
        className="text-sm opacity-80"
      />
    </div>
  );
};
