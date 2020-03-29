import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Curtain from './components/Curtain'



function App() {
  return (
    <div className="App">
      <Curtain />
      <Header />
      <Main />
     
    </div>
  );
}

export default App;
