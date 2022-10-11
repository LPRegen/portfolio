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
        <Paragraph>
          In my work experience I have always enjoyed to provide solutions
          focused on people, because helping them is a great oportunity to make
          a positive impact in our world social and economically. In addition
          each situation represents a challenge!
        </Paragraph>
        <Paragraph>
          <Bold>Web development</Bold> is not only interesting but also
          fascinating because it gives the tools to provide solutions for people
          may live thousands of kilometers away from each other.
        </Paragraph>
        <Paragraph>
          Realizing the difficulty to interact with the web that exist for some
          people, I started to learn about <Bold>accessibility</Bold> to provide
          them a better experience.
        </Paragraph>
        <Paragraph>
          Concepts like Object Oriented Programming (<Bold>OOP</Bold>) and
          Test-driven Development (<Bold>TDD</Bold>) are familiar to me.
        </Paragraph>
        <Paragraph>
          Some of the technologies I use are on a daily basis are{' '}
          <Bold>React</Bold>, <Bold>JavaScript</Bold> and{' '}
          <Bold>TypeScript</Bold>.
        </Paragraph>
      </div>

      <div className="grid gap-6 mx-auto rounded-xl shadow-xl p-4 w-full max-w-6xl">
        <Title as="h3">Technologies</Title>
        <div className="text-center grid grid-cols-3 grid-rows-2 gap-x-3.5 gap-y-5 pt-4 xl:grid-cols-4">
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
            icon={<Icon iconName="styled" aria-hidden />}
            title="Styled Components"
          />
          <Technology
            icon={<Icon iconName="sass" aria-hidden />}
            title="SASS"
          />
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
            icon={<Icon iconName="eslint" aria-hidden />}
            title={'ESLint'}
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
