import { Heading } from "./Heading";

interface ContainerProps {
  variant: "section" | "post";
  title: string;
  children: React.ReactNode;
  className?: string;
  id: string;
}

export const Container = ({
  variant,
  title,
  children,
  className = "",
  id,
}: ContainerProps) => {
  const postStyle = variant === "post" ? "lg:grid-cols-2 2xl:gap-14" : "";

  return (
    <div id={id} className="grid gap-12 lg:gap-16">
      <Heading as="h2" after className="mt-8">
        {title}
      </Heading>
      <div className={`grid gap-12 lg:gap-16 px-4 ${postStyle} ${className}`}>
        {children}
      </div>
    </div>
  );
};
