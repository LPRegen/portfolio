import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Title } from './Heading';
import { Paragraph } from './Paragraph';
import { Icon } from './Icons';
import { SectionWrapper } from './Wrapper';

import ImageTest from '../public/Screenshot_2022-08-26-01-49-11_3280x1080.png';
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
      'With this app you will be able to create your own resume based on a predefined template, at the end you can download it as a pdf file.',
    technologies:
      'React.js React-icons react-router-dom react-to-print Styled Components',
    live: 'https://resume-builder-lime.vercel.app/',
    repo: 'https://github.com/LPRegen/resume-builder',
    image: resumeBuilder,
    altImg: 'Resume builder mockup',
  },
  {
    name: 'Weather App',
    description:
      'You will be able to find the forecast for a specific city. The used API is from OpenWeather. The main purpouse was to practice API calls and use asynchronous code with promises.',
    technologies: 'JS Webpack SASS',
    live: 'https://lpregen.github.io/weather-app/',
    repo: 'https://github.com/LPRegen/weather-app',
    image: ImageTest,
    altImg: 'test',
  },
];

export const Projects = () => {
  const Links = ({ live, repo }: { live: string; repo: string }) => {
    const anchorStyle = 'flex gap-2 text-primary-800/90 underline';
    return (
      <div className="grid grid-cols-2 gap-12 py-8">
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
      {projectList.map((project) => {
        return (
          <div key={project.name} className="shadow-2xl rounded-xl">
            <Image
              src={project.image}
              alt={project.altImg}
              layout="responsive"
              className="rounded-t-xl"
            />
            <div className="flex flex-col gap-4 items-center p-4">
              <Title as="h3" className="w-full">
                {project.name}
              </Title>
              <Paragraph className="text-secondary-800">
                {project.description}
              </Paragraph>
              <Paragraph className="text-secondary-600 w-full">
                {project.technologies}
              </Paragraph>
              <Links repo={project.repo} live={project.live} />
            </div>
          </div>
        );
      })}
    </SectionWrapper>
  );
};
