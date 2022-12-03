interface BoldProps {
  children: React.ReactNode;
  className?: string;
}

export const Bold = ({ children, className = '' }: BoldProps) => {
  const spanStyles = 'text-primary-800/90 font-medium';
  return <span className={`${spanStyles} ${className}`}>{children}</span>;
};
