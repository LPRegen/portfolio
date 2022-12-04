import { DocumentIcon } from '@sanity/icons';

export default {
  name: 'post',
  title: 'Post',
  icon: DocumentIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Post description',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'postImage',
      title: 'Post image',
      type: 'object',
      fields: [
        {
          name: 'imageUrl',
          title: 'Image URL',
          type: 'string',
        },
        {
          name: 'authorName',
          title: 'Author name',
          type: 'string',
        },
        {
          name: 'authorProfile',
          title: 'Author profile',
          type: 'string',
        },
        {
          name: 'altTextImage',
          title: 'Img alternative text',
          type: 'string',
        },
      ],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { name: 'codeBlock', type: 'code' }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      options: {
        dateFormat: 'MMM-D-YYYY',
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
