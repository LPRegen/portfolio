import Image from "next/image";
import { Post } from "../types/schema-types";
import { CustomLink } from "./CustomLink";
import { Heading } from "./Heading";

interface CardPostProps
  extends Omit<Post, "body" | "_id" | "author" | "publishedAt"> {
  variant: "hero" | "regular";
}

export const CardPost = ({
  title,
  description,
  slug,
  variant,
  postImage,
}: CardPostProps) => {
  const { altTextImage, imageUrl, authorName, authorProfile } = postImage;
  const styles = {
    type: {
      hero: "gap-3 lg:gap-4",
      regular: "gap-2 lg:gap-3 self-start",
    },
    containerImg: {
      hero: "relative h-56 sm:h-64 md:h-72 lg:h-[450px]",
      regular: "relative h-40 sm:h-30 md:h-40 lg:h-50",
    },
    textContainer: {
      hero: "pb-6 gap-4",
      regular: "gap-2",
    },
  };

  return (
    <div
      className={`grid rounded-xl shadow-xl transition md:hover:shadow-2xl ${styles.type[variant]}`}
    >
      <div className={`grid gap-2`}>
        <CustomLink
          href={`/blog/${slug.current}`}
          title={`Read ${title}.`}
          className={styles.containerImg[variant]}
        >
          <Image
            alt={altTextImage}
            src={imageUrl}
            fill
            className={`rounded-t-xl object-cover`}
            priority
          />
        </CustomLink>
        <span className="pl-4 text-sm font-light">
          Photo of{" "}
          <CustomLink
            href={authorProfile}
            className="text-blue-600 hover:underline"
          >
            {authorName}
          </CustomLink>
        </span>
      </div>

      <div className={`grid p-4 pt-0 ${styles.textContainer[variant]}`}>
        <CustomLink
          href={`/blog/${slug.current}`}
          className="max-w-fit hover:underline"
        >
          <Heading as={variant === "hero" ? "h2" : "h3"}>{title}</Heading>
        </CustomLink>
        <p className="line-clamp-3">{description}</p>
      </div>
    </div>
  );
};
