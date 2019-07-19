import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';

import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [value, setValue] = useLocalStorage()
  return (
    <div className="App">
      <h1>App.js</h1>
      <LoginForm setValue = {setValue} />
    </div>
  );
}

export default App;
