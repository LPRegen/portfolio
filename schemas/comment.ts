import { defineField, defineType } from "sanity";

const comment = defineType({
  title: "Comment",
  type: "document",
  name: "comment",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Approved",
      name: "approved",
      type: "boolean",
      description: "Comments won't show on the site without approval",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "comment",
      type: "text",
    }),
    defineField({
      name: "post",
      type: "reference",
      to: [{ type: "post" }],
    }),
  ],
  preview: {
    select: {
      name: "name",
      comment: "comment",
      post: "post.title",
    },
    prepare({ name, comment, post }) {
      return {
        title: `${name} on ${post}`,
        subtitle: comment,
      };
    },
  },
});

export default comment;
