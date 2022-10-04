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
  const wrapperStyle = 'grid gap-12 lg:gap-16';

  return (
    <div id={id} className={`${wrapperStyle}`}>
      <Title as="h2" after className="pb-8 mt-8">
        {title}
      </Title>
      <div className={`${wrapperStyle} ${className} px-4`}>{children}</div>
    </div>
  );
};
