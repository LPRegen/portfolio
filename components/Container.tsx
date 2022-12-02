import { Heading } from './Heading';

interface ContainerProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id: string;
}

export const Container = ({
  title,
  children,
  className = '',
  id,
}: ContainerProps) => {
  const wrapperStyle = 'grid gap-12 lg:gap-16';

  return (
    <div id={id} className={`${wrapperStyle}`}>
      <Heading as="h2" after className="pb-8 mt-8">
        {title}
      </Heading>
      <div className={`${wrapperStyle} ${className} px-4`}>{children}</div>
    </div>
  );
};
