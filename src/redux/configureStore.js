import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './Main/main';

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});

export default store;