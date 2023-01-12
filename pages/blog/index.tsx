// import { Bold } from "../../components/Bold";
// import { CardPost } from "../../components/CardPost";
// import { Container } from "../../components/Container";
import { CustomLink } from "../../components/CustomLink";
import { Heading } from "../../components/Heading";
import { Layout } from "../../components/Layout";
// import { Paragraph } from "../../components/Paragraph";
import { sanityClient } from "../../sanity";
import { Post } from "../../types/schema-types";

interface PostProps {
  posts: Array<Post>;
}

// eslint-disable-next-line
export default function Blog({ posts }: PostProps) {
  // const [hero, ...morePosts] = posts;

  return (
    <Layout variant="blog">
      <div className="flex flex-col pl-2 mt-6 gap-4 align-center justify-center md:mt-20 lg:mt-32 h-[50vh]">
        <div className="grid gap-4 text-center">
          <Heading as="h1">🚧 Section under construction</Heading>
          <CustomLink href="/" className="underline text-blue-500">
            Go back to Home section
          </CustomLink>
        </div>
        {/*   <Heading as="h1">{`Hi there! I'm Manuel`}</Heading> */}
        {/*   <Paragraph> */}
        {/*     Here you will find articles related to{" "} */}
        {/*     <Bold>my journey as a self-taught web developer</Bold>. What I have */}
        {/*     been learning, my struggles and some articles about FOSS and tools */}
        {/*     that I use on a daily basis. */}
        {/*   </Paragraph> */}
      </div>
      {/* <CardPost */}
      {/*   variant="hero" */}
      {/*   description={hero.description} */}
      {/*   slug={hero.slug} */}
      {/*   title={hero.title} */}
      {/*   postImage={hero.postImage} */}
      {/* /> */}

      {/* <Container variant="post" title="More articles" id="more-articles"> */}
      {/*   {morePosts.map((post) => ( */}
      {/*     <CardPost */}
      {/*       key={post._id} */}
      {/*       variant="regular" */}
      {/*       description={post.description} */}
      {/*       slug={post.slug} */}
      {/*       title={post.title} */}
      {/*       postImage={post.postImage} */}
      {/*     /> */}
      {/*   ))} */}
      {/* </Container> */}
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] | order(_createdAt desc) {_id, title, slug, postImage, description}`;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
