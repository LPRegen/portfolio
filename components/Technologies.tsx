import { Icon } from "./Icons";
import { Paragraph } from "./Paragraph";

interface TechnologiesProps {
  title: string;
  icon: string;
}

export const Technology = ({ title, icon }: TechnologiesProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-secondary-800">
      <Icon iconName={icon} aria-hidden />
      <Paragraph className="font-lato text-xs text-secondary-600">
        {title}
      </Paragraph>
    </div>
  );
};
