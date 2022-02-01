import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

const functionsCount = new Set();

function App() {
  const [user, setUser] = useState('ebibi');
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : 'Please login';
  }, [user]);

  const handleAddPost = useCallback(
    (newPost) => {
      setPosts([newPost, ...posts]);
    },
    [posts]
  );

  functionsCount.add(handleAddPost);
  console.log(functionsCount);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} handleAddPost={handleAddPost} />
      <PostList posts={posts} />
      <button onClick={() => setCount((prev) => prev + 1)}>{count} +</button>
    </div>
  );
}

export default App;
