import Image from "next/image";
import { Project } from "types/schema-types";
import { Container } from "./Container";
import { CustomLink } from "./CustomLink";
import { Heading } from "./Heading";
import { Icon } from "./Icons";
import { Tags } from "./Tags";
import { Serializer } from "./Serializer";

import { urlFor } from "lib/client";
import { getProjects } from "lib/queries";

const Links = (urls: Pick<Project, "urlsGroup">) => (
  <div className="mx-auto grid grid-cols-2 gap-12">
    {urls.urlsGroup.map((group) => {
      return (
        <CustomLink
          key={group.urlTitle}
          href={group.urlValue}
          title="Check the live version of this project."
          className="flex gap-2 p-3 text-lg text-primary-800/90 underline"
        >
          <Icon
            iconName={group.urlTitle === "Live" ? "link" : "github"}
            aria-hidden
          />
          {group.urlTitle}
        </CustomLink>
      );
    })}
  </div>
);

export const Projects = async () => {
  const projects = await getProjects();

  const containerStyles =
    "grid grid-rows-2 shadow-2xl rounded-xl md:grid-rows-none md:grid-cols-2 font-lato";

  return (
    <Container variant="section" id="projects" title="Projects">
      {projects.map(({ title, imgGroup, urlsGroup, techList, description }) => (
        <div key={title} className={containerStyles}>
          <div className="relative -z-10">
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
