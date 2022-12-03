import { Menu } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { CustomLink } from './CustomLink';
import { Icon } from './Icons';

interface Item {
  name: string;
  href: string;
}

const itemList: Array<Item> = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
];

const navItem =
  'block px-3 py-2 my-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:bg-gray-200/80 focus:bg-gray-200/80';

const wrapperStyle = 'absolute w-full z-50 border-b shadow-lg';

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

const DivNav = () => {
  const mdStyles = 'md:gap-8 md:flex md:items-center md:px-28';
  return (
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
  );
};

const MenuNav = () => (
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
);

const Navbar = () => {
  const [windowDimensions, setWindowDimensions] = useState<boolean | null>(
    null
  );

  const checkWindowDimensions = () =>
    setWindowDimensions(window.matchMedia('(max-width: 768px)').matches);

  useEffect(() => {
    checkWindowDimensions();
    window.addEventListener('resize', checkWindowDimensions);
    return () => window.removeEventListener('resize', checkWindowDimensions);
  }, []);

  return <nav>{windowDimensions ? <MenuNav /> : <DivNav />}</nav>;
};

export default Navbar;
