export default {
  title: "Project List",
  type: "document",
  name: "projectList",
  fields: [
    {
      title: "Project Title",
      type: "string",
      name: "projTitle",
    },
    {
      title: "Description",
      type: "array",
      name: "projDescription",
      of: [{ type: "block" }],
    },
    {
      title: "Technologies",
      type: "array",
      name: "techList",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      title: "URLs",
      name: "urlsGroup",
      type: "object",
      fields: [
        {
          title: "Repository URL",
          name: "repoUrl",
          type: "url",
        },
        {
          title: "Live URL",
          name: "liveUrl",
          type: "url",
        },
      ],
    },
    {
      title: "Project Image",
      name: "imgGroup",
      type: "object",
      fields: [
        {
          title: "Image",
          name: "projImage",
          type: "image",
        },
        {
          title: "Alternative Text for Image",
          name: "altImage",
          type: "string",
        },
      ],
    },
  ],
  preview: { select: { title: "projTitle" } },
};
