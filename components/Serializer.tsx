import { PortableText } from "@portabletext/react";
import { Project } from "../types/schema-types";

export const Serializer = ({ description }: Pick<Project, "description">) => {
  return (
    <PortableText
      value={description}
    />
  );
};
