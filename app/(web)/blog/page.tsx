import { CardPost } from "components/CardPost";
import { Heading } from "components/Heading";
import { getPosts } from "lib/queries";

async function Blog() {
  const [featPost, ...morePosts] = await getPosts();
  return (
    <>
      <div className="mb-20 mt-14 grid gap-8">
        <Heading as="h1">Featured post</Heading>
        <CardPost
          slug={featPost.slug}
          key={featPost._id}
          title={featPost.title}
          description={featPost.description}
          variant="hero"
          postImage={featPost.postImage}
        />
      </div>
      <div className="mb-20 grid gap-5 lg:grid-cols-2">
        <Heading as="h2" className="mb-4 lg:col-span-full">
          More posts
        </Heading>
        {morePosts.map((post) => {
          return (
            <CardPost
              slug={post.slug}
              key={post._id}
              title={post.title}
              description={post.description}
              variant="regular"
              postImage={post.postImage}
            />
          );
        })}
      </div>
    </>
  );
}

export default Blog;
