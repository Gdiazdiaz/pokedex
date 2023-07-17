import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonsByName } from '../redux/Main/main';

function DetailsPage(){
const specificPokemon = useSelector((state) => state.pokemons);
const dispatch = useDispatch();
const parameters = useParams();
const { name } = parameters;
useEffect(() => {
      dispatch(getPokemonsByName(name));
  }, []);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${specificPokemon.id}.png`
  
    return(
        <div>
            <div>
                <h1>{specificPokemon.name}</h1>
                <img src={imageUrl}/>
                <div>
                <h2>Types</h2>
                <ul>
                 {specificPokemon.types?.map((type) => (
                    <li key={type.slot}>{type.type.name}</li>
                    ))} 
                </ul>
                </div>
            </div>
            <div>
                <h2>Stats</h2>
                <ul>
                    <li>XP -------------------- {specificPokemon.base_experience}</li>
                    <li>Height ---------------- {specificPokemon.height}</li>
                    <li>Weight ---------------- {specificPokemon.weight}</li>
                </ul>
                <h2>Movements</h2>
                <ul>
                 {specificPokemon.moves?.slice(0, 5).map((move) => (
      <li key={move.move.name}>{move.move.name}</li>
    ))}
  </ul>
            </div>
        </div>
    );
}

export default DetailsPage;