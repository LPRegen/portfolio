export interface Author {
  name: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  bio: string;
}

interface PostImage {
  imageUrl: string;
  authorName: string;
  authorProfile: string;
  altTextImage: string;
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
  body: [
    {
      _type: string;
      code?: string;
      language?: string;
      children: [
        {
          text: string;
        }
      ];
    }
  ];
}
