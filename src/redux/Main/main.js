import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPokemons = createAsyncThunk(
    'pokemons/getPokemons',
    async () => {
      const respond = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      return respond.data.results;
    },
  );

  export const getPokemonsByName = createAsyncThunk(
    'pokemons/getPokemonByName',
    async (name) => {
      const respond = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return respond.data;
    },
  );

  const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getPokemons.fulfilled, (state, action) => (action.payload))
        .addCase(getPokemonsByName.fulfilled, (state, action) => (action.payload));
    },
  });
  
  export const pokemonsActions = pokemonsSlice.actions;
  export default pokemonsSlice.reducer;