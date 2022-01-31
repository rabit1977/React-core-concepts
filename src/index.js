import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [language, setLanguage] = useState('javaScript');
  const [yearsExperience, setYearsExperience] = useState(0);

  return (
    <div>
      <button onClick={() => setLanguage('python')}>Change Language</button>

      <div>
        <input
          type='number'
          onChange={(event) => setYearsExperience(event.target.value)}
        />
      </div>
      <p>I am learning {language}</p>
      <p>I have {yearsExperience} years of experience</p>
    </div>
  );
}

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
