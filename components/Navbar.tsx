import Link from 'next/link';
import { Menu } from '@headlessui/react';
import { Icon } from './Icons';

interface Item {
  name: string;
  href: string;
}

const itemList = [
  { name: 'About me', href: '/#about-me' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Blog', href: '/blog' },
];

const Navbar = () => {
  const navItem =
    'block px-3 py-2 my-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100';

  const MenuItem = ({ item }: { item: Item }) => {
    return (
      <Menu.Item>
        {({ active }) => (
          <div>
            <Link href={item.href}>
              <a
                className={`${navItem} ${active && 'bg-secondary-300'}`}
                title={item.name}
              >
                {item.name}
              </a>
            </Link>
          </div>
        )}
      </Menu.Item>
    );
  };

  const wrapperStyle = 'absolute w-full z-50 border-b shadow-lg';
  const mdStyles = 'md:flex md:justify-between md:items-center md:px-36';
  const lgStyles = 'lg:flex lg:justify-between lg:items-center lg:px-64';
  const xlStyles = 'xl:flex xl:justify-between xl:items-center xl:px-80';
  const xxlStyles = '2xl:flex 2xl:justify-between 2xl:items-center 2xl:px-96';

  // TODO close menu when an item is clicked.

  return (
    <nav>
      <Menu
        as="div"
        className={`${wrapperStyle} md:hidden lg:hidden xl:hidden 2xl:hidden`}
      >
        <Menu.Button className="px-3 py-2 my-1 focus:bg-gray-100 rounded-md">
          <Icon iconName="menu" size="large" />
        </Menu.Button>
        <Menu.Items
          aria-label="Menu items"
          className="absolute z-10 w-full px-2 pb-3 bg-white shadow-lg"
        >
          {itemList.map((item) => (
            <MenuItem item={item} key={item.name} />
          ))}
        </Menu.Items>
      </Menu>
      <div
        className={`hidden h-14 ${wrapperStyle} ${mdStyles} ${lgStyles} ${xlStyles} ${xxlStyles}`}
      >
        {itemList.map((item) => (
          <Link href={item.href} key={item.name}>
            <a className={navItem} title={item.name}>
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
