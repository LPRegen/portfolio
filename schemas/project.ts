import { defineArrayMember, defineField, defineType } from "sanity";

const project = defineType({
  title: "Project List",
  type: "document",
  name: "projectList",
  preview: { select: { title: "projTitle" } },
  fields: [
    defineField({
      title: "Project Title",
      type: "string",
      name: "projTitle",
    }),
    defineField({
      title: "Description",
      type: "array",
      name: "projDescription",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      title: "Technologies",
      type: "array",
      name: "techList",
      of: [defineArrayMember({ type: "string" })],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      title: "URLs",
      name: "urlsGroup",
      type: "object",
      fields: [
        defineField({
          title: "Repository URL",
          name: "repoUrl",
          type: "url",
        }),
        defineField({
          title: "Live URL",
          name: "liveUrl",
          type: "url",
        }),
      ],
    }),
    defineField({
      title: "Project Image",
      name: "imgGroup",
      type: "object",
      fields: [
        defineField({
          title: "Image",
          name: "projImage",
          type: "image",
        }),
        defineField({
          title: "Alternative Text for Image",
          name: "altImage",
          type: "string",
        }),
      ],
    }),
  ],
});

export default project;
