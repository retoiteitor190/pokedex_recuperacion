import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[pokemon,setPokemon]= useState({});

  const [busqueda, setBusqueda]= useState("");

  const fetchPokemon=(id)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response)=>response.json())
    .then((data)=>setPokemon(data));
  };

  fetchPokemonbyname = () => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${busqueda}`)
    .then((response) => response.json())
    .then((data) => setPokemon(data));
  };

  const getRandomInt=(min= 1,max=600)=>{
    return Math.floor(Math.random()* (max-min)+min);
  };

  const siguiente=(min=1,max=600)=>{
    if(pokemon.id >= max){
      return pokemon.id = min;
    }else{
      return pokemon.id + 1 ;
    }
  };

  const regresar=(min=1,max=600)=>{
    if(pokemon.id   <=min){
      return pokemon.id=max;
      }else {
        return pokemon.id - 1 ;
      }
  };

  useEffect(()=>{
    console.log({pokemon});
  },[pokemon]);
  return (
    <div className="App">
      <header className="App-header">
        <div className='flex-container'>
        <img src={pokemon?.sprites?.front_default ?? "https://pngimg.com/uploads/pokeball/pokeball_PNG26.png"} className="poke-image" alt="logo" />
        <img src={pokemon?.sprites?.back_default ?? "https://i.pinimg.com/originals/95/fc/30/95fc304b40461a9922bd1d3aff885496.png"} className="poke-image" alt="logo" />
        </div>
        <h3>Nombre del pokemon:</h3>
        <p>
         {pokemon.name ?? "Pokemon no seleccionado"}
        </p>
        <h4>Pokemon ID:</h4>
        <p>{pokemon.id ?? "Pokemon no seleccionado"}</p>
        <div className='flex-continer '>
          <button className='button' onClick={()=>fetchPokemon(regresar())}>Antes</button>
          <button className='button' onClick={()=>fetchPokemon(getRandomInt())}>Random</button>
          <button className='button' onClick={()=>fetchPokemon(siguiente())}>Siguiente</button>
        </div>
      </header>
    </div>
  );
}

export default App;
