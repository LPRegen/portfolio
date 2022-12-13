import Image from "next/image";
import manuel_escribano from "../public/manuel-escribano.webp";
import { Post } from "../types/schema-types";

type ProfileProps = Pick<Post, "publishedAt">;

export const Profile = ({ publishedAt }: ProfileProps) => {
  return (
    <div className="flex items-center justify-start">
      <Image
        alt={""}
        aria-hidden
        src={manuel_escribano}
        className={`rounded-full`}
        width={40}
        height={40}
      />
      <div className="grid ml-3">
        <p className="text-orange-700">Manuel Escribano</p>
        <p className="font-light text-xs">
          Last update:{" "}
          {new Date(publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};
