import { createClient, groq } from "next-sanity";
import sanityConfig from "../sanity.config";
import { Project } from "../types/schema-types";

const client = createClient(sanityConfig);

export async function getProjects(): Promise<Project[]> {
  const projects = await client.fetch(
    groq`*[_type == 'projects'] { title, description, imgGroup, techList, urlsGroup }`,
  );
  return projects;
}
