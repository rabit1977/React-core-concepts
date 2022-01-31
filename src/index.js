import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
        document.removeEventListener('mousemove', handleMouseMove)
    }
  }, []);

  function handleMouseMove(event) {
    setMousePosition({ x: event.pageX, y: event.pageY });
  }

  return (
    <div>
      <p>x: {mousePosition.x}</p>
      <p>y: {mousePosition.y}</p>
    </div>
  );
}

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);

function NewPage() {
  return <div>new page</div>;
}
setTimeout(() => ReactDOM.render(<NewPage />, rootNode), 2000);
