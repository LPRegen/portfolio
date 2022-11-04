import Image, { StaticImageData } from 'next/image';
import { CustomLink } from './CustomLink';
import { Title } from './Heading';
import { Paragraph } from './Paragraph';
import { Icon } from './Icons';
import { SectionWrapper } from './Wrapper';

import olaApp from '../public/ola-home.jpg';
import resumeBuilder from '../public/resume-builder.jpg';
import weatherApp from '../public/weather-app.jpg';

type Project = {
  name: string;
  description: string;
  technologies: string;
  live: string;
  repo: string;
  image: StaticImageData;
  altImg: string;
};

const projectList: Project[] = [
  {
    name: 'Ola',
    description:
      "The purpose of this app is to improve and facilitate the administration of events. Different speakers can submit talks requests, the event administrator will review it and the speaker will be notified with the administrator's decision.",
    technologies: 'Built with TypeScript, Next JS, Tailwind CSS, Storybook.',
    live: 'https://water-call-for-papers.vercel.app/',
    repo: 'https://github.com/frontendcafe/water-call-for-papers',
    image: olaApp,
    altImg: 'Ola mockup',
  },
  {
    name: 'Resume builder',
    description:
      'First approach to React JS! This project was made with class components, lyfecicle methods, routing and much more! The user after completing the required fields will be able to download its Resume as a PDF file. Bye bye DOM manipulation with Vanilla.',
    technologies: 'Built with React JS and Styled Components.',
    live: 'https://resume-builder-lime.vercel.app/',
    repo: 'https://github.com/LPRegen/resume-builder',
    image: resumeBuilder,
    altImg: 'Resume builder mockup',
  },
  {
    name: 'Weather App',
    description:
      'The main purpouse was to practice API calls, use asynchronous code with promises and put in practice ES6+ features. You will be able to find the forecast for a specific city. The used API is from OpenWeather. ',
    technologies: 'Built with JS, Webpack, SCSS.',
    live: 'https://lpregen.github.io/weather-app/',
    repo: 'https://github.com/LPRegen/weather-app',
    image: weatherApp,
    altImg: 'Weather app mockup',
  },
];

const Links = ({ live, repo }: Pick<Project, 'live' | 'repo'>): JSX.Element => {
  const anchorStyle = 'flex gap-2 text-primary-800/90 underline p-3 text-lg';
  return (
    <div className="grid grid-cols-2 gap-12 mt-4">
      <CustomLink
        href={live}
        title="Check the live version of this project."
        className={anchorStyle}
      >
        Live
        <Icon iconName="link" aria-hidden />
      </CustomLink>
      <CustomLink
        href={repo}
        title="Check the repository of this project."
        className={anchorStyle}
      >
        GitHub
        <Icon iconName="github" aria-hidden />
      </CustomLink>
    </div>
  );
};

export const Projects = (): JSX.Element => {
  const containerStyles =
    'grid grid-rows-2 shadow-2xl rounded-xl md:grid-rows-none md:grid-cols-2 font-lato';

  return (
    <SectionWrapper id="projects" title="Projects">
      {projectList.map(
        ({ name, image, altImg, description, technologies, repo, live }) => {
          return (
            <div key={name} className={`${containerStyles}`}>
              <div className="relative -z-10">
                <Image
                  src={image}
                  alt={altImg}
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                />
              </div>
              <div className="flex flex-col justify-between gap-4 items-center px-4 pb-4 sm:p-8 lg:p-4 lg:gap-8">
                <Title as="h3" className="w-full text-xl">
                  {name}
                </Title>
                <Paragraph className="text-secondary-800">
                  {description}
                </Paragraph>
                <i className="text-secondary-600">{technologies}</i>
                <Links repo={repo} live={live} />
              </div>
            </div>
          );
        }
      )}
    </SectionWrapper>
  );
};
