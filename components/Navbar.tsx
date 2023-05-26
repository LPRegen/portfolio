import { CustomLink } from "./CustomLink";

interface Url {
  name: string;
  href: string;
}

const itemList: Array<Url> = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

const navItem =
  "flex items-center p-1.5 my-1 font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:bg-gray-200/80 focus:bg-gray-200/80";

const containerStyle =
  "flex gap-8 h-14 px-4 border-b shadow-lg sm:px-8 lg:px-14";

const Navbar = () => {
  return (
    <nav className={containerStyle}>
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
    </nav>
  );
};

export default Navbar;
