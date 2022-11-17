import Image from "next/image";
import {Heading} from "./Heading"

interface PostPreviewProps {
  image: string;
  title: string;
  description: string;
}

export const Post = ({}: PostPreviewProps) => {
  return (
    <div>
      <Image src={"asd"} alt="asd" />
      <Heading>
    </div>
  );
};
