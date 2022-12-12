interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  after?: boolean;
}

export const Heading = ({
  children,
  as,
  className = '',
  after,
  ...props
}: TitleProps) => {
  const Component = as;

  let styles: string;
  switch (as) {
    case 'h1':
      styles = 'font-extrabold text-4xl';
      break;
    case 'h2':
      styles = 'font-bold text-3xl ';
      break;
    case 'h3':
      styles = 'font-semibold text-2xl ';
      break;
    case 'h4':
      styles = 'font-bold text-xl ';
      break;
  }

  const afterLine = after
    ? 'md:after:content-[""] md:after:block md:after:relative md:after:border-b md:after:w-[50%] md:after:top-[-0.6em] md:after:right-0 md:after:ml-[50%] md:after:mr-[5%] md:after:border-secondary-400'
    : '';

  return (
    <Component
      className={`${styles} ${className} ${afterLine} tracking-wide`}
      {...props}
    >
      {children}
    </Component>
  );
};
