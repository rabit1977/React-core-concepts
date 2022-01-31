import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const people = ['Jane', 'John', 'Sime'];
  function handleInputChange(event) {
    const inputValue = event.target.value;
    console.log(inputValue);
  }
  return (
    <ul>
      {people.map((person, i) => (
        <Person key={i} person={person} />
      ))}
      <input type='text' onChange={handleInputChange} />
    </ul>
  );
}
function Person({ person }) {
  function handlePersonClick(event) {
    alert(person);
    console.log(event);
  }
  return <li onClick={handlePersonClick}>{person}</li>;
}

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
