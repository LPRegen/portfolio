import { Title } from './Heading';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id: string;
}

export const SectionWrapper = ({
  title,
  children,
  className,
  id,
}: SectionWrapperProps) => {
  const wrapperStyle = 'flex flex-col gap-8';

  return (
    <div id={id} className={`${wrapperStyle} ${className}`}>
      <Title as="h2" after>
        {title}
      </Title>
      {children}
    </div>
  );
};
