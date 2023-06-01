interface BoldProps {
  children: React.ReactNode;
  className?: string;
}

export const Bold = ({ children, className = "" }: BoldProps) => {
  const spanStyles = "text-orange-700 font-medium";
  return <strong className={`${spanStyles} ${className}`}>{children}</strong>;
};
