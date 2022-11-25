import imageUrlBuilder from '@sanity/image-url';
import { config } from '../../sanity';

const builder = imageUrlBuilder(config);

function urlForImage(source: string) {
  return builder.image(source).auto('format').fit('max');
}

export default urlForImage;
