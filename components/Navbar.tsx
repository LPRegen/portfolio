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
  "block px-3 py-2 my-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:bg-gray-200/80 focus:bg-gray-200/80";

const wrapperStyle = "absolute w-full z-50 border-b shadow-lg";

// FIX: display
const Navbar = () => {
  const mdStyles = "md:gap-8 md:flex md:items-center md:px-28";
  return (
    <nav
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
    </nav>
  );
};

export default Navbar;
