import { Title } from './Heading';
import { Paragraph } from './Paragraph';

export const AboutMe = () => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <Title as="h2" content="About me" className="text-xl w-full" />
      <Paragraph content="I'm a selftought Frontend developer who lives in Argentina and enjoys new challenges! I think in every challenge, there is an opportunity to improve myself. To continue learning I use different sources like books, articles, videos or even communities. I enjoy to keep learning and also I have plans to become a MERN fullstack developer." />
    </div>
  );
};
