import { CustomLink } from "components/CustomLink";
import { Profile } from "components/Profile";
import { Serializer } from "components/Serializer";
import { getPost } from "lib/queries";
import { type Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";

async function Post({ params: { slug } }: { params: Params }) {
  const { body, postImage, publishedAt } = await getPost(slug);
  const { authorName, authorProfile, altTextImage, imageUrl } = postImage;

  return (
    <div className="my-10 grid gap-6">
      <Profile publishedAt={publishedAt} />
      <div className="relative h-52 md:h-64 lg:h-80">
        <Image
          alt={altTextImage}
          src={imageUrl}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <span className="pl-4 text-sm font-normal">
        Photo of{" "}
        <CustomLink
          href={authorProfile}
          className="text-blue-600 hover:underline"
        >
          {authorName}
        </CustomLink>
      </span>
      <article className="mt-6">
        <Serializer description={body} />
      </article>
    </div>
  );
}

export default Post;
