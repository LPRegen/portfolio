import { GetStaticProps } from 'next';
import Image from 'next/image';
import { BlogPost } from '../../components/BlogPost';
import { CustomLink } from '../../components/CustomLink';
import { Layout } from '../../components/Layout';
import { Profile } from '../../components/Profile';
import { sanityClient } from '../../sanity';
import { Post } from '../../types/schema-types';

interface PostsProps {
  post: Post;
}

function Posts({ post }: PostsProps) {
  const { publishedAt, postImage, body } = post;
  const { altTextImage, imageUrl, authorName, authorProfile } = postImage;

  const imgSize = `
    (max-width:640px) 80vw,
    (max-width:768px) 70vw,
    (max-width:1024px) 71vw,
    (max-width:1280px) 65vw,
    (max-width:1536px) 66vw,
    70vw"
  `;

  return (
    <>
      <Layout variant="article">
        <Profile publishedAt={publishedAt} />
        <div className="grid gap-2">
          <div className="relative h-56 sm:h-64 md:h-72 lg:h-[450px] mt-4">
            <Image
              alt={altTextImage}
              src={imageUrl}
              fill
              className={`object-cover rounded-xl shadow-xl`}
              sizes={imgSize}
              priority
            />
          </div>
          <span className="pl-4 text-sm font-light">
            Photo of{' '}
            <CustomLink
              href={authorProfile}
              className="text-blue-600 hover:underline"
            >
              {authorName}
            </CustomLink>
          </span>
        </div>

        <BlogPost body={body} />
      </Layout>
    </>
  );
}

export default Posts;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{_id, slug {
    current
  }}`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    postImage,
    slug,
    body,
    publishedAt
  }`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 86400,
  };
};
