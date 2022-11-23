export interface Author {
  name: string;
  image: string;
  bio: string;
}

export interface Post {
  _createdAt: string;
  _id: string;
  title: string;
  author: Author;
  description: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
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
