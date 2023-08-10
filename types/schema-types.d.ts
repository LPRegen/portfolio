export interface Image {
  asset: {
    _ref: string;
  };
}

interface PostImage {
  imageUrl: string;
  authorName: string;
  authorProfile: string;
  altTextImage: string;
}

interface Content {
  _type: string;
  code?: string;
  language?: string;
  children: [
    {
      text: string;
    }
  ];
}

interface Urls {
  urlTitle: string;
  urlValue: string;
}

export interface Author {
  name: string;
  image: Image;
  bio: string;
}

export interface Post {
  publishedAt: string;
  _id: string;
  title: string;
  author: Author;
  description: string;
  postImage: PostImage;
  slug: {
    current: string;
  };
  body: Array<Content>;
}

interface Project {
  title: string;
  description: Array<Content>;
  imgGroup: {
    altImage: string;
    projImage: Image;
  };
  techList: Array<string>;
  urlsGroup: Array<Urls>;
}

interface ProjectList {
  list: Project[];
}
