import { groq } from "next-sanity";
import { Post, Project } from "../types/schema-types";
import { client } from "./client";

export async function getProjects(): Promise<Project[]> {
  const projects = await client.fetch(
    groq`*[_type == 'projects'] { title, description, imgGroup, techList, urlsGroup }`
  );
  return projects;
}

export async function getPosts(quantity = 10): Promise<Post[]> {
  const posts = await client.fetch(
    groq`*[_type == "post"] | order(_createdAt desc) {_id, title, slug, postImage, description}[0..${quantity}]`
  );
  return posts;
}

export async function getPost(slug: string): Promise<Post> {
  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    postImage,
    slug,
    body,
    publishedAt
  }`,
    { slug }
  );
  return post;
}
