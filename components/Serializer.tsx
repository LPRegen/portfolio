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
    em: ({ children }) => {
      return <Bold className="font-medium text-orange-700">{children}</Bold>;
    },
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
  // - inline code
  // - strong
  // - em,
  // - underline
  // - headings
  // -> add margin bottom.
  // - striketrhough
  // -
  // - set width
};

export const Serializer = ({ description }: Pick<Project, "description">) => {
  return <PortableText value={description} components={customComponents} />;
};
