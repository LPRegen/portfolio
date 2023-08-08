import { CustomLink } from "./CustomLink";
import { Paragraph } from "./Paragraph";

interface Items {
  name: string;
  href: string;
}

const Sections = ({ item }: { item: Items }) => {
  const footerItem =
    "text-gray-600 px-3 py-2 text-base hover:underline transition duration-150 ease-in-out rounded-md hover:text-gray-800 hover:bg-gray-200/80 focus:bg-gray-200/80";
  return (
    <li>
      <CustomLink
        href={item.href}
        className={footerItem}
        title={`Go to ${item.name}`}
      >
        {item.name}
      </CustomLink>
    </li>
  );
};

export const Footer = () => {
  const sections: Array<Items> = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];
  return (
    <footer className="grid gap-8 border-t">
      <ul className="flex items-center justify-center gap-[5%] pt-6">
        {sections.map((item) => (
          <Sections item={item} key={item.name} />
        ))}
      </ul>
      <Paragraph className="mx-auto grid pb-6 text-sm text-gray-500">
        Copyright © 2023 Manuel Escribano
      </Paragraph>
    </footer>
  );
};
