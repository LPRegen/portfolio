import { Title } from './Heading';
import { Paragraph } from './Paragraph';

export const Hero = () => {
  return (
    <div className="flex flex-col gap-[10vw]">
      <div className="grid gap-[8vw]">
        <Title as="h1" content="Manuel" className="text-[10vw] pl-[5%]" />
        <Title as="h1" content="Escribano" className="text-[10vw] pl-[15%]" />
      </div>
      <div>
        <Paragraph content="Frontend" className="text-[7.5vmin] pl-[25%]" />
        <Paragraph content="Developer" className="text-[7.5vmin] pl-[35%]" />
      </div>
    </div>
  );
};
