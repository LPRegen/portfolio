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
  let styles = className ? className : '';

  return (
    <div id={id} className={`${wrapperStyle} ${styles}`}>
      <Title as="h2" after className="pb-8">
        {title}
      </Title>
      {children}
    </div>
  );
};
