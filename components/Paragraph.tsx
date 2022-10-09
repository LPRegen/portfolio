interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph = ({
  children,
  className,
  ...props
}: ParagraphProps) => (
  <p {...props} className={`font-lato text-lg ${className}`}>
    {children}
  </p>
);
