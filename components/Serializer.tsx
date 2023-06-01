import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";
import { Project } from "types/schema-types";
import { Bold } from "./Bold";
import { Code } from "./Code";
import { CustomLink } from "./CustomLink";
import { Heading } from "./Heading";

const customComponents: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => <Heading as="h1">{children}</Heading>,
    h2: ({ children }) => <Heading as="h2">{children}</Heading>,
    h3: ({ children }) => <Heading as="h3">{children}</Heading>,
    h4: ({ children }) => <Heading as="h4">{children}</Heading>,
  },
  marks: {
    link: ({ children, value }) => (
      <CustomLink className="text-blue-600 hover:underline" href={value.href}>
        {children}
      </CustomLink>
    ),
    strong: ({ children }) => (
      <Bold className="font-semibold text-orange-700">{children}</Bold>
    ),
    code: ({ children }) => (
      <code className="rounded bg-orange-400/70 px-1.5 py-0.5">{children}</code>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 ml-4 list-disc marker:text-orange-800">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 ml-5 list-decimal marker:font-semibold marker:text-orange-800">
        {children}
      </ol>
    ),
  },
  types: {
    code: ({ value }) => <Code language={value.language} code={value.code} />,
  },
  // TODO: add
  // - set width
  // - display post img
  // - headings
  // -> add margin bottom.
};

export const Serializer = ({ description }: Pick<Project, "description">) => {
  return <PortableText value={description} components={customComponents} />;
};
