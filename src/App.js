import React, { createContext, useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

export const UserContext = createContext();

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

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <UserContext.Provider value={user}>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} handleAddPost={handleAddPost} />
      <PostList posts={posts}  />
    </UserContext.Provider>
  );
}

export default App;
