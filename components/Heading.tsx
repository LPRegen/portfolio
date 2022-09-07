interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  content: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export const Title = ({ content, as, className, ...props }: TitleProps) => {
  const Component = as;
  return (
    <Component className={className} {...props}>
      {content}
    </Component>
  );
};
