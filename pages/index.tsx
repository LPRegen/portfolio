import type { NextPage } from 'next';
import Link from 'next/link';
import { Title } from '../components/Heading';

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-black/60 h-[100vh] flex flex-col gap-16 justify-center items-center">
        <Title
          as="h1"
          content={'⚙️ Under construction ⚙️'}
          className="text-2xl"
        />
        <span className="text-lg">
          Find me on{' '}
          <Link href={'https://www.linkedin.com/in/manuel-escribano-lpregen/'}>
            <a className="text-white underline underline-offset-2">LinkedIn</a>
          </Link>{' '}
          or check out my{' '}
          <Link href={'https://github.com/LPRegen'}>
            <a className="text-white underline underline-offset-2">GitHub</a>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Home;
