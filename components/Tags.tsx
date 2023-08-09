import React, { ComponentPropsWithoutRef } from "react";

interface TagsProps extends ComponentPropsWithoutRef<"li"> {
  technologies: Array<string>;
}

export const Tags = ({ technologies }: TagsProps) => {
  return (
    <ul className="col-span-full flex flex-wrap gap-1 text-xs">
      {technologies.map((tech) => (
        <li key={tech} className="rounded-lg bg-gray-400 px-1.5 py-0.5">
          {tech}
        </li>
      ))}
    </ul>
  );
};
