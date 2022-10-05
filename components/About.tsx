import { Title } from './Heading';
import { Paragraph } from './Paragraph';
import { Technology } from './Technologies';
import { Icon } from './Icons';
import { SectionWrapper } from './Wrapper';
import { Bold } from './Span';

export const AboutMe = () => {
  return (
    <SectionWrapper id="about-me" title="About me">
      <div className="grid gap-2">
        <Paragraph>Hi! My name is Manuel and I am a frontend dev!</Paragraph>
        <Paragraph>
          In my work experience I have always enjoyed to provide solutions
          focused on people, because I am helping them and each situation
          represents a challenge!
        </Paragraph>
        <Paragraph>
          I find <Bold>web development</Bold> truly interesting, its gives me
          the tools to provide solutions for people making a positive impact on
          its life! And they can be at thousands of kilometers away from you, is
          crazy!
        </Paragraph>
        <Paragraph>
          A while ago I have realized how difficult can be for some people to
          interact with the web, so I started to learn about accessibility so
          they can have a better experience.
        </Paragraph>
        <Paragraph>
          Some of the technologies I use are <Bold>React</Bold>,{' '}
          <Bold>JavaScript</Bold> and <Bold>TypeScript</Bold>.
        </Paragraph>
      </div>

      <div className="flex flex-col gap-6 rounded-xl shadow-xl p-4 mx-4">
        <Title as="h3">Technologies I use</Title>
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
    </SectionWrapper>
  );
};
