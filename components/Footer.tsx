import Link from 'next/link';
import { Paragraph } from './Paragraph';

interface Items {
  name: string;
  href: string;
  target?: '_self' | '_blank';
}

export const Footer = () => {
  const sections: Array<Items> = [
    { name: 'About me', href: '/#about-me' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  const footerItem =
    'text-lg py-1 my-2 text-black hover:opacity-80 active:underline font-lato';

  const Sections = ({ item }: { item: Items }) => (
    <li>
      <Link href={item.href}>
        <a className={footerItem} title={`Go to ${item.name} section`}>
          {item.name}
        </a>
      </Link>
    </li>
  );

  return (
    <footer className="grid gap-8 border-t mt-20">
      <ul className="flex justify-center items-center pt-6 gap-[5%]">
        {sections.map((item) => (
          <Sections item={item} key={item.name} />
        ))}
      </ul>
      <Paragraph className="grid mx-auto text-base pb-6">
        © Copyright 2022, Manuel Escribano
      </Paragraph>
    </footer>
  );
};
