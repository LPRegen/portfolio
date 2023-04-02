import { defineConfig } from "sanity";
import { apiVersion, dataset, projectId, title } from "./lib/sanity-variables";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import schemas from "./schemas";

export default defineConfig({
  basePath: "/studio",
  dataset,
  projectId,
  title,
  apiVersion,
  plugins: [
    deskTool(),
    visionTool(),
  ],
  schema: {
    types: schemas,
  },
  useCdn: true,
});
