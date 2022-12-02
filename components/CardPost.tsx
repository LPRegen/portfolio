import Image from 'next/image';
import urlForImage from '../studio/lib/utils';
import { Post } from '../types/schema-types';
import { CustomLink } from './CustomLink';
import { Heading } from './Heading';

interface CardPostProps
  extends Omit<Post, 'body' | '_createdAt' | '_id' | 'author'> {
  variant: 'hero' | 'regular';
}

export const CardPost = ({
  title,
  description,
  slug,
  mainImage,
  imgAlt,
  variant,
}: CardPostProps) => {
  const styles = {
    container: {
      hero: 'lg:gap-8',
      regular: 'lg:gap-6 self-start',
    },
    containerImg: {
      hero: 'h-56 sm:h-64 md:h-72 lg:h-[450px]',
      regular: 'h-40 sm:h-48 md:h-56 lg:h-80',
    },
    textContainer: {
      hero: 'lg:gap-6',
      regular: 'lg:gap-4',
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
    <div className={`grid gap-4 ${styles.container[variant]}`}>
      <CustomLink
        href={`/blog/${slug.current}`}
        title={`Read ${title}`}
        className={`relative ${styles.containerImg[variant]}`}
      >
        <Image
          alt={imgAlt}
          src={urlForImage(mainImage.asset._ref).url()}
          fill
          className={`object-cover rounded-xl shadow-xl`}
          sizes={styles.imgSizes[variant]}
          priority
        />
      </CustomLink>
      <div className={`grid gap-2 ${styles.textContainer[variant]}`}>
        <CustomLink
          href={`/blog/${slug.current}`}
          className="max-w-fit underline"
        >
          <Heading as={variant === 'hero' ? 'h2' : 'h3'}>{title}</Heading>
        </CustomLink>
        <p className="font-normal">{description}</p>
      </div>
    </div>
  );
};
