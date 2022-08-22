interface TechnologiesProps {
  title: string;
  icon: any;
}

export const Technology = ({ title, icon }: TechnologiesProps) => {
  return (
    <div>
      {icon}
      {title}
    </div>
  );
};
