import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const baseUrl = 'https://api.github.com/users/';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const searchInput = useRef();

  useEffect(() => {
    getUser();

    // fetch(endpoint)
    //   .then((response) => response.json())
    //   .then((data) => setUser(data));
  }, []);
  function handleClearInput() {
    searchInput.current.value = '';
    searchInput.current.focus();
  }

  async function getUser() {
    const response = await fetch(`${baseUrl}${username}`);
    const data = await response.json();
    setUser(data);
  }

  return (
    <div>
      <input
        type='text'
        placeholder='input username'
        onChange={(event) => setUsername(event.target.value)}
        ref={searchInput}
      />
      <button onClick={getUser}>Search</button>
      <button onClick={handleClearInput}>Clear</button> <br />
      <br />
      {user ? (
        <div>
          <div>
            <b>{user.name}</b>
          </div>
          <div>
            <b>{user.location}</b>
          </div>
          <div>
            <b>User bio:</b> {user.bio}
          </div>
          <div>
            <b>followers:</b> {user.followers}
          </div>
          <div>
            <b>following:</b> {user.following}
          </div>
          <img src={user.avatar_url} style={{ height: 50 }} alt='' />
        </div>
      ) : (
        <p>...Loading</p>
      )}
    </div>
  );
}

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
