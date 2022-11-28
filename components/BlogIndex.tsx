import Image from 'next/image';
import urlForImage from '../studio/lib/utils';
import { Post } from '../types/schema-types';
import { CustomLink } from './CustomLink';
import { Heading } from './Heading';

interface BlogIndexProps
  extends Omit<Post, 'body' | '_createdAt' | '_id' | 'author'> {
  variant: 'hero' | 'regular';
}

export const BlogIndex = ({
  title,
  description,
  slug,
  mainImage,
  imgAlt,
  variant,
}: BlogIndexProps) => {
  const styles = {
    container: {
      hero: 'lg:gap-8',
      regular: 'lg:gap-6 self-start',
    },
    containerImg: {
      hero: 'h-48 sm:h-56 md:h-64 lg:h-[450px]',
      regular: 'h-40 sm:h-48 md:h-56 lg:h-80',
    },
    textContainer: {
      hero: 'lg:gap-6',
      regular: 'lg:gap-4',
    },
  };

  return (
    <div className={`grid gap-4 ${styles.container[variant]}`}>
      <CustomLink
        href={`/${slug.current}`}
        title={`Read ${title}`}
        className={`relative ${styles.containerImg[variant]}`}
      >
        <Image
          alt={imgAlt}
          src={urlForImage(mainImage.asset._ref).url()}
          fill
          className={`object-cover rounded-xl shadow-xl`}
          priority
        />
      </CustomLink>
      <div className={`grid gap-2 ${styles.textContainer[variant]}`}>
        <CustomLink href={`/${slug.current}`} className="max-w-fit underline">
          <Heading as={variant === 'hero' ? 'h2' : 'h3'}>{title}</Heading>
        </CustomLink>
        <p className="font-normal">{description}</p>
      </div>
    </div>
  );
};
