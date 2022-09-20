import Link from 'next/link';
import { Title } from './Heading';
import { Paragraph } from './Paragraph';
import { Icon } from './Icons';

type Project = {
  name: string;
  description: string;
  technologies: string;
  live: string;
  repo: string;
};

const projectList: Project[] = [
  {
    name: 'Todo List',
    description:
      'App to keep track of whatever you want, you will be able to categorize tasks by projects and set due dates for them, you will not miss a due date!',
    technologies: 'Developed with JavaScript, Webpack and date-fns library.',
    live: 'https:www.google.com',
    repo: 'https:www.google.com',
  },
  {
    name: 'Todo List2',
    description:
      'App to keep track of whatever you want, you will be able to categorize tasks by projects and set due dates for them, you will not miss a due date!',
    technologies: 'Developed with JavaScript, Webpack and date-fns library.',
    live: 'https:www.google.com',
    repo: 'https:www.google.com',
  },
];

export const Projects = () => {
  const Links = ({ live, repo }: { live: string; repo: string }) => {
    const anchorStyle = 'flex gap-2 text-primary-800/90 underline';

    return (
      <div className="flex gap-12">
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
      {projectList.map((project) => {
        return (
          <div key={project.name} className="shadow-xl">
            <div className="flex flex-col gap-4 items-center p-4 rounded-b-xl">
              <Title
                as="h3"
                content={project.name}
                className="text-lg font-semibold w-full "
              />
              <Paragraph
                className="text-secondary-800"
                content={project.description}
              />
              <Paragraph
                className="text-secondary-700"
                content={project.technologies}
              />
              <Links repo={project.repo} live={project.live} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
