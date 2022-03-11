import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import Popup from "./components/popup.js"

function App() {
  const[pokemon,setPokemon]= useState({});

  const [busqueda, setBusqueda]= useState("");

  const [buttonPopup,setButtonPopup]= useState(false);

  const fetchPokemon=(id)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response)=>response.json())
    .then((data)=>setPokemon(data));
  };

  const fetchPokemonbyname = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      ;
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

  const onChange= async e =>{
    e.persist();
    setBusqueda(e.target.value);
  };

  useEffect(()=>{
    console.log({pokemon});
  },[pokemon]);
  return (
    <div className="App">
      <header className="App-header">
        <div className='Git-Enlace'>
          <a className='alingCentral' href='https://github.com/retoiteitor190/pokedex_recuperacion.git'> Proyecto Git Alejandro Ruíz Moreno</a>
        </div>
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
        {pokemon.id ? (
            <><button
                className="button"
                onClick={() => fetchPokemon(regresar())}
              >
                Antes
              </button>{" "}
            </>
          ) : (
            <button className="button" onClick={() => fetchPokemon(600)}>
              Antes
            </button>
          )}
          
          <button className='button' onClick={()=>fetchPokemon(getRandomInt())}>Random</button>
          {pokemon.id ? (<><button className="button" onClick={() => fetchPokemon(siguiente())}>Siguiente</button>{" "}
            </>
          ) : (
            <button className="button" onClick={() => fetchPokemon(1)}>
              Siguiente
            </button>
          )}
          <button className='button' onClick={()=>setButtonPopup(true)}>habilidades</button>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Habilidades</h3>
          <ul className='text'>
             {pokemon?.abilities?.map((ability)=>(
               <li key={ability.ability.id}>
                 {ability.ability.name}
               </li>
             ))
             }
          </ul>
      </Popup>
        <div className="containerInput">
        <input
          value={busqueda}
          placeholder=" Nombre de Pokemon"
          onChange={onChange}
        /><br></br>
        <button className="botonBusq"  onClick={() => fetchPokemonbyname()}>Buscar</button>
      </div>
      </header>
    </div>
  );
}

export default App;
