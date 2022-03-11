import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='flex-container'>
        <img src={logo} className="poke-image" alt="logo" />
        <img src={logo} className="poke-image" alt="logo" />
        </div>
        <p>
         Nombre
        </p>
        <div className='flex-continer '>
          <button className='button'>Antes</button>
          <button className='button'>Random</button>
          <button className='button'>Siguiente</button>
        </div>
      </header>
    </div>
  );
}

export default App;
