import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const endpoint = 'https://api.github.com/users/rabit1977';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return user ? (
    <>
      <div>{user.name}</div>
      <div>{user.location}</div>
      <div>{user.bio}</div>
      <div>{user.followers}</div>
      <div>{user.follow}</div>
      <img src={user.avatar_url} style={{ height: 50 }} alt='' />
    </>
  ) : (
    <p>...Loading</p>
  );
}

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
