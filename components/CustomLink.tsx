import Link from 'next/link';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  active?: boolean;
}

export const CustomLink = ({
  href,
  children,
  className = '',
  title,
  active,
}: CustomLinkProps): JSX.Element => {
  const activeProp = active ? `${active && 'bg-secondary-300'}` : '';

  return (
    <Link href={href} className={`${activeProp} ${className}`} title={title}>
      {children}
    </Link>
  );
};
