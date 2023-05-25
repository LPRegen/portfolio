import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId, title } from "lib/sanity-variables";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas";

export default defineConfig({
  basePath: "/studio",
  dataset,
  projectId,
  title,
  apiVersion,
  plugins: [deskTool(), visionTool(), codeInput()],
  schema: {
    types: schemas,
  },
  useCdn: true,
});
