import Head from 'next/head';

export const HeadComp = () => {
  return (
    <Head>
      <title>Manuel Escribano | Frontend dev</title>
      <meta
        name="description"
        content="Portfolio of Manuel Escribano, Frontend web developer"
      />
      <meta
        name="keywords"
        content="Manuel, Escribano, Frontend, Web, Developer, HTML, CSS, JavaScript, React js, Tailwind, TypeScript, Next, js,"
      />
      <meta name="author" content="Manuel Escribano" />
      <link rel="icon" href="/favicon-16x16.png" />
    </Head>
  );
};
