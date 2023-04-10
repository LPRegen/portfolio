import { defineArrayMember, defineField, defineType } from "sanity";

const post = defineType({
  title: "Post",
  type: "document",
  name: "post",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Post description",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "postImage",
      title: "Post image",
      type: "object",
      fields: [
        defineField({
          name: "imageUrl",
          title: "Image URL",
          type: "string",
        }),
        defineField({
          name: "authorName",
          title: "Author name",
          type: "string",
        }),
        defineField({
          name: "authorProfile",
          title: "Author profile",
          type: "string",
        }),
        defineField({
          name: "altTextImage",
          title: "Img alternative text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      title: "Body",
      name: "body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
        }),
        defineArrayMember({
          type: "code",
          name: "code",
        }),
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "date",
      options: {
        dateFormat: "MMM-D-YYYY",
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
  },
});

export default post;
