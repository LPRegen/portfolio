import { Menu } from '@headlessui/react';
import Link from 'next/link';
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
              <a className={`${navItem} ${active && 'bg-secondary-300'}`}>
                {item.name}
              </a>
            </Link>
          </div>
        )}
      </Menu.Item>
    );
  };

  // TODO close menu when an item is clicked.

  return (
    <Menu as="nav" className="absolute w-full z-50 border-b shadow-lg">
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
  );
};

export default Navbar;
