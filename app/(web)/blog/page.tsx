import { CardPost } from "components/CardPost";
import { Heading } from "components/Heading";
import { getPosts } from "lib/queries";

async function Blog() {
  const [latestPost] = await getPosts();

  return (
    <>
      <div className="mb-20 mt-14 grid gap-8">
        <Heading as="h1">Latest post</Heading>
        <CardPost
          slug={latestPost.slug}
          key={latestPost._id}
          title={latestPost.title}
          description={latestPost.description}
          variant="hero"
          postImage={latestPost.postImage}
        />
      </div>
    </>
  );
}

export const revalidate = 1800;

//      <div className="mb-20 grid gap-5 lg:grid-cols-2">
//        <Heading as="h2" className="mb-4 lg:col-span-full">
//          More posts
//        </Heading>
//        {otherPosts && <MorePosts posts={otherPosts} />}
//      </div>

export default Blog;
