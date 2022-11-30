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
      styles = 'font-extrabold text-4xl font-lato';
      break;
    case 'h2':
      styles = 'font-bold text-3xl font-lato ';
      break;
    case 'h3':
      styles = 'font-semibold text-2xl font-lato ';
      break;
    case 'h4':
      styles = 'font-bold text-xl font-lato ';
      break;
  }

  const afterLine = after
    ? 'after:content-[""] after:block after:relative after:border-b after:w-[50%] after:top-[-0.6em] after:right-0 after:ml-[50%] after:mr-[5%] after:border-secondary-400'
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
