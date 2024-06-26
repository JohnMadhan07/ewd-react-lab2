import React from "react";
import { ListedMovie, UpcomingMovies } from "../types/interfaces";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getUpcomingMovies } from "../api/tmdb-api";
import AddtoPlaylist from '../components/cardIcons/addToPlaylist'
import Spinner from "../components/spinner";


  const UpcomingMoviesPage:React.FC = () => {

    const { data, error, isLoading, isError } = useQuery<UpcomingMovies, Error>("Upcoming movies", getUpcomingMovies);
    const movies = data ? data.results : [];
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
  
    return (
      <MovieListPageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie: ListedMovie) => {
        return <AddtoPlaylist {...movie} />
      }}
    />
  );
};
export default UpcomingMoviesPage;