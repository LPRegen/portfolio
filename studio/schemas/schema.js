import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import category from './category';
import post from './post';
import author from './author';
import comment from './comment';
import blockContent from './blockContent';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    /* Your types here! */
    category,
    post,
    author,
    comment,
    blockContent,
  ]),
});
