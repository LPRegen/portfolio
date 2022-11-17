import { Author } from './author-types';

export interface Post {
  _createdAt: string;
  _id: string;
  title: string;
  author: Author;
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: Array<object>;
}
