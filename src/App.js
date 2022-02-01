import { useEffect, useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState('ebibi');

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : 'Please login';
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div>
      <Header user={user} setUser={setUser} />
    </div>
  );
}

export default App;