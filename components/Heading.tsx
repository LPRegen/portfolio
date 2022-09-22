interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  content: string;
  as: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
}

export const Title = ({ content, as, className, ...props }: TitleProps) => {
  const Component = as;

  let styles: string;
  switch (as) {
    case 'h1':
      styles = 'font-extrabold text-2xl text-black';
      break;
    case 'h2':
      styles = 'font-bold text-xl text-black';
      break;
    case 'h3':
      styles = 'font-semibold text-lg text-black';
      break;
    case 'h4':
      styles = 'font-bold text-base text-black';
      break;
  }

  return (
    <Component className={`${styles} ${className}`} {...props}>
      {content}
    </Component>
  );
};
