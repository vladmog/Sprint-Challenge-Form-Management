import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import useLocalStorage from './hooks/useLocalStorage';
import Friends from './Friends';

function App() {
  const [value, setValue] = useLocalStorage()
  return (
    <div className="App">
      <LoginForm setValue = {setValue} />
      <Friends value = {value}/>
    </div>
  );
}

export default App;
