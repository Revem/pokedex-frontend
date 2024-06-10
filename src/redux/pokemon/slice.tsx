import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface PokemonState {
  list: any[];
  pokemon: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  list: [],
  pokemon: null,
  loading: false,
  error: null,
};

const fetchWithFallback = async (localUrl: string, fallbackUrl: string) => {
  try {
    const response = await axios.get(localUrl);
    return response.data;
  } catch (error) {
    console.warn(`Failed to fetch from ${localUrl}. Trying fallback URL...`);
    const response = await axios.get(fallbackUrl);
    return response.data;
  }
};

// Operações assíncronas usando createAsyncThunk
export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async () => {
  return await fetchWithFallback(
    'http://localhost:8000/v1/pokemons/',
    'http://your-production-url.com/v1/pokemons/'
  );
});

export const fetchPokemonDetails = createAsyncThunk(
  'pokemon/fetchPokemonDetails',
  async (query: string) => {
    return await fetchWithFallback(
      `http://localhost:8000/v1/pokemon/search?query=${query}`,
      `http://your-production-url.com/v1/pokemon/search?query=${query}`
    );
  }
);

export const fetchPokemonDetailsById = createAsyncThunk(
  'pokemon/fetchPokemonDetailsById',
  async (id: number) => {
    return await fetchWithFallback(
      `http://localhost:8000/v1/pokemons/${id}`,
      `http://your-production-url.com/v1/pokemons/${id}`
    );
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemons.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch pokemons';
      })
      .addCase(fetchPokemonDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.pokemon = action.payload;
      })
      .addCase(fetchPokemonDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch pokemon details';
      })
      .addCase(fetchPokemonDetailsById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonDetailsById.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.pokemon = action.payload;
      })
      .addCase(fetchPokemonDetailsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch pokemon details';
      });
  },
});

export default pokemonSlice.reducer;
