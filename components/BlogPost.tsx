import PortableText from 'react-portable-text';
import type { Post } from '../types/schema-types';
import { Code } from './Code';
import { CustomLink } from './CustomLink';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';

interface SerializerProps {
  children: string;
  href: string;
  code: string;
  language: string;
}

export const BlogPost = ({ body }: Pick<Post, 'body'>) => {
  return (
    <>
      <PortableText
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        content={body}
        className="grid gap-4"
        serializers={serializers}
      />
    </>
  );
};

const serializers = {
  h1: ({ children }: SerializerProps) => (
    <Heading as="h1" className="mb-16 mt-20 text-center">
      {children}
    </Heading>
  ),

  h2: ({ children }: SerializerProps) => (
    <Heading as="h2" className="mb-4 mt-6">
      {children}
    </Heading>
  ),

  h3: ({ children }: SerializerProps) => (
    <Heading as="h3" className="mb-2 mt-4">
      {children}
    </Heading>
  ),

  h4: ({ children }: SerializerProps) => (
    <Heading as="h4" className="mb-1 mt-2">
      {children}
    </Heading>
  ),

  normal: ({ children }: SerializerProps) => <Paragraph>{children}</Paragraph>,

  codeBlock: ({ code, language }: SerializerProps) => (
    <Code language={language} code={code} />
  ),

  code: ({ children }: SerializerProps) => (
    <code className="bg-slate-300/70 p-0.5 pt-1 rounded-md">{children}</code>
  ),

  link: ({ href, children }: SerializerProps) => (
    <CustomLink href={href} className="underline text-blue-500">
      {children}
    </CustomLink>
  ),

  ul: ({ children }: SerializerProps) => (
    <ul className="ml-6 list-disc text-slate-800 [&>*]:pt-2">{children}</ul>
  ),

  ol: ({ children }: SerializerProps) => (
    <ol className="ml-6 list-decimal text-slate-800 [&>*]:pt-2">{children}</ol>
  ),
};
