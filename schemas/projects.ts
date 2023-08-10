import { defineArrayMember, defineField, defineType } from "sanity";

export const projects = defineType({
  name: "projects",
  title: "Projects list",
  type: "document",
  preview: {
    prepare: () => ({ title: "Project list." }),
  },
  fields: [
    defineField({
      title: "List",
      type: "array",
      name: "list",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "project" }],
        }),
      ],
    }),
  ],
});
