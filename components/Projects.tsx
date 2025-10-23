import Image from "next/image";
import { Project } from "types/schema-types";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { Serializer } from "./Serializer";
import { Tags } from "./Tags";

import { urlFor } from "lib/client";
import { getProjects } from "lib/queries";

const Links = (urls: Pick<Project, "urlsGroup">) => (
  <div className="mx-auto flex gap-12">
    {urls.urlsGroup.map((link) => {
      const linkTitle = link.urlTitle === "Live" ? "live site" : "repository";
      return (
        <a
          key={link.urlTitle}
          href={link.urlValue}
          title={`Check the ${linkTitle} of this project.`}
          className="px-2 py-1 text-lg text-primary-800/90 underline"
        >
          {link.urlTitle}
        </a>
      );
    })}
  </div>
);

export const Projects = async () => {
  const { list } = await getProjects();

  const containerStyles = "shadow-2xl rounded-xl font-lato";

  return (
    <Container variant="section" id="projects" title="Projects">
      {list.map(({ title, imgGroup, urlsGroup, techList, description }) => (
        <div key={title} className={containerStyles}>
          <div className="relative -z-10 h-48 md:h-64">
            <Image
              src={urlFor(imgGroup.projImage).url()}
              alt={imgGroup.altImage}
              fill={true}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-4 px-4 pb-4 sm:p-8 lg:gap-8 lg:p-4">
            <Heading as="h3" className="w-full text-xl">
              {title}
            </Heading>
            <Tags technologies={techList} />
            <Serializer description={description} />
            <Links urlsGroup={urlsGroup} />
          </div>
        </div>
      ))}
    </Container>
  );
};
