import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Icon } from './Icons';

interface Item {
  name: string;
  href: string;
}

interface ItemList {
  itemList: Array<Item>;
}

const Navbar = ({ itemList, ...props }: ItemList) => {
  const [newScroll, setScroll] = useState(0);
  const [prevScroll, setPrevScroll] = useState(0);

  const updatePrevScroll = () => {
    setPrevScroll(newScroll);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
      updatePrevScroll();
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const navItem =
    'py-1 my-2 flex items-center text-white hover:opacity-80 active:underline';

  const Item = ({ item }: { item: Item }) => {
    return (
      <li>
        <Link href={item.href}>
          <a className={navItem}>{item.name}</a>
        </Link>
      </li>
    );
  };

  const displayNav = () => (newScroll > prevScroll ? 'hidden' : 'fixed');

  return (
    <div {...props} className={`${displayNav()} w-full bg-primary-700`}>
      <div className="flex gap-4 items-center justify-center">
        <div aria-label="Home Page">
          <Link href="/">
            <a>
              <Icon iconName="logo" size="large" />
            </a>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-2">
            {itemList.map((item) => (
              <Item item={item} key={item.name} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
