interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as: "h1" | "h2" | "h3" | "h4";
  className?: string;
  after?: boolean;
}

export const Heading = ({
  children,
  as,
  className = "",
  after,
  ...props
}: TitleProps) => {
  const Component = as;

  let styles: string;
  switch (as) {
    case "h1":
      styles = "font-extrabold text-2xl text-black";
      break;
    case "h2":
      styles = "font-bold text-xl text-black font-lato ";
      break;
    case "h3":
      styles = "font-semibold text-lg text-black font-lato ";
      break;
    case "h4":
      styles = "font-bold text-base text-black font-lato ";
      break;
  }

  const afterLine = after
    ? 'after:content-[""] after:block after:relative after:border-b after:w-[60%] after:top-[-0.8em] after:right-0 after:ml-[40%] after:mr-[5%] after:border-secondary-400'
    : "";

  return (
    <Component
      className={`${styles} ${className} ${afterLine} tracking-wide`}
      {...props}
    >
      {children}
    </Component>
  );
};
