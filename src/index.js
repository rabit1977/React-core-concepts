import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [developer, setDeveloper] = useState({
    language: 'React',
    yearsExperience: 0,
    isEmployed: false,
  });

  //   const [language, setLanguage] = useState('javaScript');
  //   const [yearsExperience, setYearsExperience] = useState(0);
  function handleChangeLanguage(event) {
    setDeveloper({
      language: 'javaScript',
      yearsExperience: 0,
    });
  }
  function handleChangeYearsExperience(event) {
    setDeveloper({ ...developer, yearsExperience: event.target.value });
  }
  function handleToggleEmployment() {
    setDeveloper((prevState) => ({
      ...developer,
      isEmployed: !prevState.isEmployed,
    }));
  }

  return (
    <div>
      <button onClick={handleToggleEmployment}>Toggle change employment</button>
      <button onClick={handleChangeLanguage}>Change Language</button>
      <div>
        <input type='number' onChange={handleChangeYearsExperience} />
      </div>
      <p>I am learning {developer.language}</p>
      <p>I have {developer.yearsExperience} years of experience</p>
      <p>
        Employment status: {developer.isEmployed ? 'Employed' : 'Unemployed'}
      </p>
    </div>
  );
}

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
