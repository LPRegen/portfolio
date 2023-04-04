import client from "../sanity.config";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "../types/schema-types";

const builder = imageUrlBuilder(client);

export default function urlFor(source: Image) {
  return builder.image(source);
}
