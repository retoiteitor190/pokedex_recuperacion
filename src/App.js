import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[pokemon,setPokemon]= useState({});
  const fetchPokemon=(id)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response)=>response.json())
    .then((data)=>setPokemon(data));
  };

  const getRandomInt=(min= 1,max=600)=>{
    return Math.floor(Math.random()* (max-min)+min);
  };

  useEffect(()=>{
    console.log({pokemon});
  },[pokemon]);
  return (
    <div className="App">
      <header className="App-header">
        <div className='flex-container'>
        <img src={pokemon?.sprites?.front_default} className="poke-image" alt="logo" />
        <img src={pokemon?.sprites?.back_default} className="poke-image" alt="logo" />
        </div>
        <h3>Nombre del pokemon:</h3>
        <p>
         {pokemon.name ?? "Pokemon no seleccionado"}
        </p>
        <div className='flex-continer '>
          <button className='button'>Antes</button>
          <button className='button' onClick={()=>fetchPokemon(getRandomInt())}>Random</button>
          <button className='button'>Siguiente</button>
        </div>
      </header>
    </div>
  );
}

export default App;
