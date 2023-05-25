import { groq } from "next-sanity";
import { Project } from "../types/schema-types";
import { client } from "./client";

const projectsQuery =
  "*[_type == 'projects'] { title, description, imgGroup, techList, urlsGroup }";

export async function getProjects(): Promise<Project[]> {
  const projects = await client.fetch(groq`${projectsQuery}`);
  return projects;
}

export async function getPosts({
  quantity,
}: {
  quantity: number;
}): Promise<[]> {
  const posts = await client.fetch(groq`${quantity}`);
  return posts;
}

export async function getPost(): Promise<[]> {
  const post = await client.fetch(groq``);
  return post;
}
