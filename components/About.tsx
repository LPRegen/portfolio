import { Title } from './Heading';
import { Paragraph } from './Paragraph';
import { Technology } from './Technologies';
import { Icon } from './Icons';

export const AboutMe = () => {
  return (
    <div id="about-me" className="flex flex-col gap-8 items-center">
      <Title as="h2" className="w-full relative" after>
        About me
      </Title>
      <Paragraph content="I'm a selftought Frontend developer who lives in Argentina and enjoys new challenges! I think in every challenge, there is an opportunity to improve myself. To continue learning I use different sources like books, articles, videos or even communities. I enjoy to keep learning and also I have plans to become a MERN fullstack developer." />
      <div className="flex flex-col gap-6 rounded-xl shadow-2xl p-4 w-full">
        <Title as="h3">Technologies</Title>
        <div className="grid grid-cols-3 grid-rows-2 gap-x-3.5 gap-y-5 pt-4">
          <Technology
            icon={<Icon iconName="javascript" aria-hidden />}
            title={'JS'}
          />
          <Technology
            icon={<Icon iconName="typescript" aria-hidden />}
            title={'TS'}
          />
          <Technology
            icon={<Icon iconName="react" aria-hidden />}
            title={'React'}
          />
          <Technology
            icon={<Icon iconName="next" aria-hidden />}
            title={'Next JS'}
          />
          <Technology
            icon={<Icon iconName="html" aria-hidden />}
            title="HTML"
          />
          <Technology icon={<Icon iconName="css" aria-hidden />} title="CSS" />
          <Technology
            icon={<Icon iconName="tailwind" aria-hidden />}
            title="Tailwind"
          />
          <Technology
            icon={<Icon iconName="story" aria-hidden />}
            title="Storybook"
          />
          <Technology
            icon={<Icon iconName="webpack" aria-hidden />}
            title="Webpack"
          />
          <Technology
            icon={<Icon iconName="jest" aria-hidden />}
            title={'Jest'}
          />
          <Technology
            icon={<Icon iconName="npm" aria-hidden />}
            title={'NPM'}
          />
          <Technology
            icon={<Icon iconName="git" aria-hidden />}
            title={'Git'}
          />
        </div>
      </div>
    </div>
  );
};
