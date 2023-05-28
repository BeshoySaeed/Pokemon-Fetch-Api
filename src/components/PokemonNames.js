import React from "react";
import uuid from "react-uuid";
import './PokemonNames.css'

const PokemonNames = ({ pokemons }) => {
  return (
    <div className="container">
      {pokemons.map((e) => (
        <div key={uuid()} className="pokemon-box">{e}</div>
      ))}
    </div>
  );
};

export default PokemonNames;
