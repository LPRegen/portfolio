import { groq } from "next-sanity";
import { Post, ProjectList } from "../types/schema-types";
import { client } from "./client";

// TODO: handle errors
export async function getProjects(): Promise<ProjectList> {
  const projects = await client.fetch(
    groq`*[_type == 'projects'][0] {
      ...,
      list[]->
    }`
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
