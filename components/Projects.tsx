import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Title } from './Heading';
import { Paragraph } from './Paragraph';
import { Icon } from './Icons';

import ImageTest from '../public/Screenshot_2022-08-26-01-49-11_3280x1080.png';

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
    name: 'Todo List',
    description:
      'App to keep track of whatever you want, you will be able to categorize tasks by projects and set due dates for them, you will not miss a due date!',
    technologies: 'Developed with JavaScript, Webpack and date-fns library.',
    live: 'https:www.google.com',
    repo: 'https:www.google.com',
    image: ImageTest,
    altImg: 'test',
  },
  {
    name: 'Todo List2',
    description:
      'App to keep track of whatever you want, you will be able to categorize tasks by projects and set due dates for them, you will not miss a due date!',
    technologies: 'Developed with JavaScript, Webpack and date-fns library.',
    live: 'https:www.google.com',
    repo: 'https:www.google.com',
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
    <div id="projects" className="flex flex-col gap-8 items-center">
      <Title as="h2" className="w-full" after>
        Projects
      </Title>

      {projectList.map((project) => {
        return (
          <div key={project.name} className="shadow-xl rounded-xl">
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
              <Paragraph className="text-secondary-700">
                {project.technologies}
              </Paragraph>
              <Links repo={project.repo} live={project.live} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
