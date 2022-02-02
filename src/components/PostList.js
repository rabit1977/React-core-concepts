import React from 'react';
import Post from './Post';

function PostList({ posts, user }) {
  return posts.map((post, i) => <Post currentUser={user} key={i} {...post} />);
}

export default PostList;
