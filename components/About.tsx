import { Title } from './Heading';
import { Paragraph } from './Paragraph';
import { Technology } from './Technologies';
import { SectionWrapper } from './Wrapper';
import { Bold } from './Span';

interface Techs {
  iconName: string;
  title: string;
}

type TechList = Array<Techs>;

const techList: TechList = [
  { iconName: 'javascript', title: 'Javascript' },
  { iconName: 'typescript', title: 'TypeScript' },
  { iconName: 'react', title: 'React' },
  { iconName: 'next', title: 'Next JS' },
  { iconName: 'html', title: 'HTML' },
  { iconName: 'css', title: 'CSS' },
  { iconName: 'styled', title: 'Styled Components' },
  { iconName: 'sass', title: 'SASS' },
  { iconName: 'tailwind', title: 'Tailwind CSS' },
  { iconName: 'story', title: 'Storybook' },
  { iconName: 'webpack', title: 'Webpack' },
  { iconName: 'eslint', title: 'ESLint' },
  { iconName: 'jest', title: 'Jest' },
  { iconName: 'npm', title: 'NPM' },
  { iconName: 'git', title: 'Git' },
];

export const AboutMe = (): JSX.Element => {
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
        <div className="text-center grid grid-cols-3 grid-rows-2 gap-x-3.5 gap-y-5 pt-4">
          {techList.map(({ iconName, title }) => (
            <Technology icon={iconName} title={title} key={iconName} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
