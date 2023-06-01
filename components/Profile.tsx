import Image from "next/image";
import manuel_escribano from "../public/manuel-escribano.webp";
import { Post } from "../types/schema-types";

export const Profile = ({ publishedAt }: Pick<Post, "publishedAt">) => {
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
      <div className="ml-3 grid">
        <p className="text-orange-700">Manuel Escribano</p>
        <p className="text-xs font-light">
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
