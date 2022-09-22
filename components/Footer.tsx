import { Icon } from './Icons';
import Link from 'next/link';

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
    { name: 'Blog', href: '/blog' },
  ];

  const socialNetworks: Array<Items> = [
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/manuel-escribano-lpregen/',
      target: '_blank',
    },
    {
      name: 'github',
      href: 'https://github.com/LPRegen',
      target: '_blank',
    },
  ];

  const footerItem = 'py-1 my-2 text-black hover:opacity-80 active:underline';

  const Sections = ({ item }: { item: Items }) => (
    <li>
      <Link href={item.href}>
        <a className={footerItem}>{item.name}</a>
      </Link>
    </li>
  );

  const Icons = ({ item }: { item: Items }) => (
    <span aria-label={`${item.name} account`}>
      <Link href={item.href}>
        <a
          target={item.target}
          title={item.name === 'github' ? 'Github' : 'Linkedin'}
        >
          <Icon
            iconName={item.name === 'github' ? 'github' : 'linkedin'}
            size="large"
          />
        </a>
      </Link>
    </span>
  );

  return (
    <footer className="flex flex-col gap-8 border-t mt-10">
      <ul className="flex justify-center items-center pt-6 gap-[5%]">
        {sections.map((item) => (
          <Sections item={item} key={item.name} />
        ))}
      </ul>
      <div className="flex justify-center items-center pb-6 gap-[10%]">
        {socialNetworks.map((item) => (
          <Icons item={item} key={item.name} />
        ))}
      </div>
    </footer>
  );
};
