import { useState } from 'react';
import Link from 'next/link';

import { MdMenu } from 'react-icons/md';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className=" flex flex-wrap items-center   justify-between w-full py-4 px-4 shadow-lg bg-primary-bg text-primary-text">
      <div className=" flex text-2xl :hover cursor-pointer w-fit">
        <MdMenu tabIndex={0} onClick={handleClick} />
      </div>

      <div
        className={`${active ? '' : 'hidden'}
        flex flex-col gap-8 pt-8 w-full`}
      >
        <Link href="#about-me">
          <a
            onClick={handleClick}
            className="p-2 hover:bg-hover-color rounded-lg focus:bg-hover-color"
          >
            About me
          </a>
        </Link>
        <Link href="#projects">
          <a
            onClick={handleClick}
            className="p-2 hover:bg-hover-color rounded-lg focus:bg-hover-color"
          >
            Projects
          </a>
        </Link>
        <Link href="#contact">
          <a
            onClick={handleClick}
            className="p-2 hover:bg-hover-color rounded-lg focus:bg-hover-color"
          >
            Contact
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
