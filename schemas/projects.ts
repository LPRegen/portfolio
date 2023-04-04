import { defineArrayMember, defineField, defineType } from "sanity";

const project = defineType({
  title: "Projects",
  type: "document",
  name: "projects",
  preview: { select: { title: "title" } },
  fields: [
    defineField({
      title: "Project Title",
      type: "string",
      name: "title",
    }),
    defineField({
      title: "Description",
      type: "array",
      name: "description",
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
      type: "array",
      of: [
        defineArrayMember({
          title: "Repository URL",
          name: "repoUrl",
          type: "object",
          fields: [
            defineField({
              title: "URL Title",
              name: "urlTitle",
              type: "string",
            }),
            defineField({
              title: "url",
              name: "urlValue",
              type: "url",
            }),
          ],
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
