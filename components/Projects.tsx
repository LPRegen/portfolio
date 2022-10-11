import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Title } from './Heading';
import { Paragraph } from './Paragraph';
import { Icon } from './Icons';
import { SectionWrapper } from './Wrapper';

import weatherApp from '../public/weather-app.jpg';
import resumeBuilder from '../public/resume-builder.jpg';

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
    name: 'Resume builder',
    description:
      'First approach to React JS! This project was made with class components, lyfecicle methods, routing and much more! The user after completing the required fields will be able to download its Resume as a PDF file. Bye bye DOM manipulation with Vanilla.',
    technologies: 'Built using React.js and Styled Components',
    live: 'https://resume-builder-lime.vercel.app/',
    repo: 'https://github.com/LPRegen/resume-builder',
    image: resumeBuilder,
    altImg: 'Resume builder mockup',
  },
  {
    name: 'Weather App',
    description:
      'The main purpouse was to practice API calls, use asynchronous code with promises and put in practice ES6+ features. You will be able to find the forecast for a specific city. The used API is from OpenWeather. ',
    technologies: 'Built using JS, Webpack, SCSS',
    live: 'https://lpregen.github.io/weather-app/',
    repo: 'https://github.com/LPRegen/weather-app',
    image: weatherApp,
    altImg: 'Weather app mockup',
  },
];

export const Projects = () => {
  const containerStyles =
    'grid grid-rows-2 shadow-2xl rounded-xl md:grid-rows-none md:grid-cols-2 font-lato';

  const Links = ({ live, repo }: { live: string; repo: string }) => {
    const anchorStyle = 'flex gap-2 text-primary-800/90 underline p-3 text-lg';
    return (
      <div className="grid grid-cols-2 gap-12 mt-4">
        <Link href={live}>
          <a
            target="_blank"
            title="Check the live version of this project."
            className={anchorStyle}
          >
            Live
            <Icon iconName="link" aria-hidden />
          </a>
        </Link>
        <Link href={repo}>
          <a
            target="_blank"
            title="Check the repository of this project."
            className={anchorStyle}
          >
            GitHub
            <Icon iconName="github" aria-hidden />
          </a>
        </Link>
      </div>
    );
  };

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
                />
              </div>
              <div className="flex flex-col justify-between gap-4 items-center px-4 pb-4 sm:p-8 lg:p-4 lg:gap-8">
                <Title as="h3" className="w-full text-xl">
                  {name}
                </Title>
                <Paragraph className="text-secondary-800">
                  {description}
                </Paragraph>
                <i className="text-secondary-500">{technologies}</i>
                <Links repo={repo} live={live} />
              </div>
            </div>
          );
        }
      )}
    </SectionWrapper>
  );
};
