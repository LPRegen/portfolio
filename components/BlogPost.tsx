import PortableText from 'react-portable-text';
import type { Post } from '../types/schema-types';
import { Code } from './Code';
import { CustomLink } from './CustomLink';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';

const serializers = {
  h1: ({ children }: { children: string }) => (
    <Heading as="h1" className="mb-12 mt-16 text-center">
      {children}
    </Heading>
  ),
  h2: ({ children }: { children: string }) => (
    <Heading as="h2" className="my-4">
      {children}
    </Heading>
  ),
  h3: ({ children }: { children: string }) => (
    <Heading as="h3" className="my-2">
      {children}
    </Heading>
  ),
  h4: ({ children }: { children: string }) => (
    <Heading as="h4">{children}</Heading>
  ),
  normal: ({ children }: { children: string }) => (
    <Paragraph>{children}</Paragraph>
  ),
  codeBlock: ({ code, language }: { code: string; language: string }) => (
    <Code language={language} code={code} />
  ),
  code: ({ children }: { children: string }) => (
    <code className="bg-slate-300/70 p-0.5 pt-1 rounded-md">{children}</code>
  ),
  link: ({ href, children }: { href: string; children: string }) => (
    <CustomLink href={href} className="underline text-blue-500">
      {children}
    </CustomLink>
  ),
  ul: ({ children }: { children: string }) => (
    <ul className="ml-6 list-disc text-slate-800">{children}</ul>
  ),
  ol: ({ children }: { children: string }) => (
    <ol className="ml-6 list-decimal text-slate-800">{children}</ol>
  ),
};

export const BlogPost = ({ body }: Pick<Post, 'body'>) => {
  return (
    <>
      <PortableText
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        content={body}
        className="grid gap-6"
        serializers={serializers}
      />
    </>
  );
};
