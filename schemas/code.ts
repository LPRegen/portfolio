import { defineField } from "sanity";

const code = defineField({
  name: "code",
  type: "code",
  options: {
    language: "javascript",
    languageAlternatives: [
      { title: "JS", value: "javascript" },
      { title: "HTML", value: "html" },
      { title: "CSS", value: "css" },
    ],
    withFilename: true,
  },
});

export default code;
