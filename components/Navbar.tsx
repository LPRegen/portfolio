import { Menu } from '@headlessui/react';
import { Icon } from './Icons';
import { CustomLink } from './CustomLink';

interface Item {
  name: string;
  href: string;
}

const itemList: Array<Item> = [
  { name: 'About me', href: '/#about-me' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const navItem =
    'block px-3 py-2 my-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100';

  const MenuItem = ({ item }: { item: Item }) => {
    return (
      <Menu.Item>
        {({ active }) => (
          <div>
            <CustomLink
              href={item.href}
              active={active}
              className={navItem}
              title={item.name}
            >
              {item.name}
            </CustomLink>
          </div>
        )}
      </Menu.Item>
    );
  };

  const wrapperStyle = 'absolute w-full z-50 border-b shadow-lg';
  const mdStyles = 'md:gap-8 md:flex md:items-center md:px-28';

  // TODO close menu when an item is clicked.
  // TODO Add aria-hidden on Menu or div depending the resolution.

  return (
    <nav className="font-lato">
      <Menu
        as="div"
        className={`${wrapperStyle} md:hidden lg:hidden xl:hidden 2xl:hidden`}
      >
        <Menu.Button
          className="px-3 py-2 my-1 focus:bg-gray-100 rounded-md"
          aria-label="Menu Items"
        >
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
        className={`hidden h-14 ${wrapperStyle} ${mdStyles} lg:px-36 xl:px-56 2xl:px-64`}
      >
        {itemList.map((item) => (
          <CustomLink
            key={item.name}
            href={item.href}
            className={navItem}
            title={item.name}
          >
            {item.name}
          </CustomLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
