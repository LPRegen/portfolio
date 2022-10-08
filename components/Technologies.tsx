import { Paragraph } from './Paragraph';

interface TechnologiesProps {
  title: string;
  icon: React.ReactElement;
}

export const Technology = ({ title, icon }: TechnologiesProps) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center text-secondary-800">
      {icon}
      <Paragraph className="text-secondary-600 text-xs font-lato">
        {title}
      </Paragraph>
    </div>
  );
};
