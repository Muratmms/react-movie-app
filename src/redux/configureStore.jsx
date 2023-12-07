import { configureStore } from "@reduxjs/toolkit";
import movieListSlice from "./movieListSlice";

const store = configureStore({
  reducer: {
    movieList: movieListSlice
  }
});

export default store;
