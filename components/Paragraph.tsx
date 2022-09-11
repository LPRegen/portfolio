interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  content: string;
  className?: string;
}

export const Paragraph = ({ content, ...props }: ParagraphProps) => (
  <p {...props}>{content}</p>
);
