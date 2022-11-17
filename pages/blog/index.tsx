// import { sanityClient } from "../../sanity";
// import { Post } from "../../types/post-types";
import Navbar from "../../components/Navbar";
import data from "./data.json";

const posts = data;

// interface PropsBlog {
//   posts: Array<Post>;
// }

export default function Blog() {
  const mainWrapper =
    "flex flex-col gap-44 mx-8 pt-24 sm:mx-16 sm:gap-56 md:mx-28 md:gap-64 lg:mx-36 lg:gap-80 xl:mx-56 2xl:mx-64";

  return (
    <>
      <Navbar />
      <div className={mainWrapper}>
        <ul>
          {posts.map((post) => (
            <li key={post._id} className={`bg-red-900`}>
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// export const getServerSideProps = async () => {
//   const query = `*[_type == "post"]{_id, _type, title, slug, author, image, categories, body} `;
//   const posts = await sanityClient.fetch(query);
//   return {
//     props: {
//       posts,
//     },
//   };
// };
