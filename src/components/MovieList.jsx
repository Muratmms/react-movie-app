import { useSelector, useDispatch } from "react-redux";
import MovieItem from "./MovieItem";
import { getMovie } from "../redux/movieListSlice";
import React, { useEffect } from 'react';

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, status } = useSelector((state) => state.movieList);
  console.log({ movies, status });
  useEffect(() => {
   
      dispatch(getMovie());
    
  }, []);

  return (
    <div>
      <ul>
        {movies.map((movie) => {
          // return ;
          return <MovieItem {...movie} key={movie.id}/>;
        })}
        
      </ul>
    </div>
  );
};
export default MovieList;