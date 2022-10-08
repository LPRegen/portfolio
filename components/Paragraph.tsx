interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph = ({ children, ...props }: ParagraphProps) => (
  <p {...props} className="font-lato">
    {children}
  </p>
);
