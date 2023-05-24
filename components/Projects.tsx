"use client";
import { Project } from "types/schema-types";
import Image from "next/legacy/image";
import { Container } from "./Container";
import { CustomLink } from "./CustomLink";
import { Heading } from "./Heading";
import { Icon } from "./Icons";

import urlFor from "../lib/urlFor";
import { getProjects } from "lib/getProjects";
// import { useEffect, useState } from "react";
import { Serializer } from "./Serializer";

const Links = (urls: Pick<Project, "urlsGroup">) => (
  <div className="grid grid-cols-2 gap-12 mt-4">
    {urls.urlsGroup.map((group) => {
      return (
        <CustomLink
          key={group.urlTitle}
          href={group.urlValue}
          title="Check the live version of this project."
          className="flex gap-2 text-primary-800/90 underline p-3 text-lg"
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

const TechList = (techList: Pick<Project, "techList">): JSX.Element => (
  <div className="flex gap-1">
    {techList.techList.map((tech) => (
      <i className="text-secondary-600" key={tech}>
        {tech}
      </i>
    ))}
  </div>
);

export const Projects = async () => {
  // const [projects, setProjects] = useState<Project[]>([]);
  // useEffect(() => {
  //   getProjects().then((data) => {
  //     setProjects(data);
  //   });
  // }, []);
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
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col justify-between gap-4 items-start px-4 pb-4 sm:p-8 lg:p-4 lg:gap-8">
            <Heading as="h3" className="w-full text-xl">
              {title}
            </Heading>
            <Serializer description={description} />
            <TechList techList={techList} />
            <Links urlsGroup={urlsGroup} />
          </div>
        </div>
      ))}
    </Container>
  );
};
