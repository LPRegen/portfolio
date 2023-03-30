import { defineConfig } from "sanity";
import { dataset, projectId, title } from "./lib/sanity-variables";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import schemas from "schemas";

export default defineConfig({
  dataset,
  projectId,
  title,
  plugins: [
    deskTool(),
    visionTool(),
  ],
  schema: {
    types: schemas,
  },
});
