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
      children: [
        {
          text: string;
        }
      ];
    }
  ];
}
