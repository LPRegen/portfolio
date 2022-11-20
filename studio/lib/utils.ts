import { config } from '../../sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(config);

function urlFor(source: string) {
  return builder.image(source);
}

export default urlFor;
