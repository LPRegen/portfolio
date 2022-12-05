import Image from 'next/image';
import { Post } from '../types/schema-types';
import { CustomLink } from './CustomLink';
import { Heading } from './Heading';

interface CardPostProps
  extends Omit<Post, 'body' | '_id' | 'author' | 'publishedAt'> {
  variant: 'hero' | 'regular';
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
    container: {
      hero: 'gap-6 lg:gap-12',
      regular: 'gap-4 lg:gap-6 self-start',
    },
    containerImg: {
      hero: 'relative h-56 sm:h-64 md:h-72 lg:h-[450px]',
      regular: 'relative h-40 sm:h-48 md:h-56 lg:h-80',
    },
    textContainer: {
      hero: 'pb-6 gap-6 lg:gap-8',
      regular: 'gap-4',
    },
    imgSizes: {
      hero: `
      (max-width: 640px) 80vw,
      (max-width: 768px) 70vw,
      (max-width: 1024px) 71vw,
      (max-width: 1280px) 65vw,
      (max-width: 1536px) 66vw,
      70vw
      `,
      regular: `
      (max-width: 640px) 80vw,
      (max-width: 768px) 70vw,
      (max-width: 1024px) 30.5vw,
      (max-width: 1536px) 30vw,
      31vw
      `,
    },
  };

  return (
    <div
      className={`grid shadow-xl rounded-xl transition md:hover:shadow-2xl ${styles.container[variant]}`}
    >
      <div className={`grid gap-2`}>
        <CustomLink
          href={`/blog/${slug.current}`}
          title={`Read ${title}`}
          className={styles.containerImg[variant]}
        >
          <Image
            alt={altTextImage}
            src={imageUrl}
            fill
            className={`object-cover rounded-t-xl`}
            sizes={styles.imgSizes[variant]}
            priority
          />
        </CustomLink>
        <span className="pl-4 text-sm text-opacity-5">
          Photo of{' '}
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
          <Heading as={variant === 'hero' ? 'h2' : 'h3'}>{title}</Heading>
        </CustomLink>
        <p className="line-clamp-3">{description}</p>
      </div>
    </div>
  );
};
