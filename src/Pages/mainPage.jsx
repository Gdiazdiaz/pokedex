import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonTab from '../components/pokemonTab';
import { getPokemons } from '../redux/Main/main';
import { NavLink } from 'react-router-dom';

function MainPage() {
    const listOfData = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!listOfData.length) {
      dispatch(getPokemons());
    }
  }, [dispatch, listOfData.length]);
  const [search, setSearch] = useState('');
  const searchCharacter = (event) => setSearch(event.target.value);
  let searchResult = [];
  if (!search) {
    searchResult = listOfData;
  } else {
    searchResult = listOfData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  }
  return (
    <div>
        <div className="bar-container">
          <input type="text" className="search-bar" placeholder="Search" onChange={searchCharacter} />
        </div>
        <div>
        <div className="row">
          {
                       searchResult.map((item) => (
                        <NavLink
                           to={`details/${item.name}`}
                           key={item.name}
                         >

                           <PokemonTab
                             name={item.name}
                             pokeUrl={item.url}
                             index={item.index}
                             key={item.name}
                           />
                           </NavLink>
                       ))
                    }
        </div>
        </div>
  </div>
  );
}

export default MainPage;