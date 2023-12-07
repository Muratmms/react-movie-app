import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMovie = createAsyncThunk("movieList/getMovie", async () => {
  
  const apiKey = import.meta.env.REACT_APP_ApiKey;

  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
  
  try {
    
    let response = await fetch(apiUrl);
    let json = await response.json();
    console.log(json);
    return json;
    
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
});

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    movies: [], 
    status: null,
    error: null, 
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(getMovie.pending, (state) => {
        state.status = "Fetching movies. Please wait a moment...";
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        let updatedMovies = state.movies.concat(action.payload);
        state.movies = updatedMovies;
        state.status = null;
      })
      .addCase(getMovie.rejected, (state, action) => {
        state.status = "Failed to fetch data...";
        state.error = action.error.message; 
      });
  },
});

export default movieListSlice.reducer;
