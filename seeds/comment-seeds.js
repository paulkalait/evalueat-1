const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This looks great.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Do not buy this.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'This looks great.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'This looks great.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'Ugly.',
    user_id: 7,
    post_id: 6
  },
  {
    comment_text: 'This looks great.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'This looks great.',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'This looks great.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'DO NOT purchase this!',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Buy now',
    user_id: 6,
    post_id: 3
  },
  {
    comment_text: 'This looks great!',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'Buy now',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'DO NOT purchase this!',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'Buy now',
    user_id: 5,
    post_id: 1
  },
  {
    comment_text: 'Great product',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Perfect gift.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'DO NOT purchase this!',
    user_id: 2,
    post_id: 4
  },
  {
    comment_text: 'Great product.',
    user_id: 4,
    post_id: 5
  },
  {
    comment_text:
      'This is great.',
    user_id: 5,
    post_id: 6
  },
  {
    comment_text:
      'So glad I purchased.',
    user_id: 9,
    post_id: 1
  },
  {
    comment_text: 'DO NOT purchase this!',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'This is great.',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text: 'Agreed',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      'DO NOT purchase this!',
    user_id: 8,
    post_id: 9
  },
  {
    comment_text:
      'DO NOT purchase this!',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'Agreed.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Buy this now.',
    user_id: 1,
    post_id: 6
  },
  {
    comment_text: 'This is great.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'This is great.',
    user_id: 4,
    post_id: 5
  },
  {
    comment_text: 'DO NOT purchase this!',
    user_id: 4,
    post_id: 8
  },
  {
    comment_text: 'DO NOT purchase this!',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'This is a great purchase.',
    user_id: 8,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
