import { useEffect, useState } from 'react';
import Genres_From_GenreIDs from './utilities/GenresFromGenreIDs';
import './App.css';
import MainMenu from './components/MainMenu';
import MovieColumn from './components/MovieColumn';
import FetchPopularMovies from './fetches/FetchPopularMovies';
import FetchGenres from './fetches/FetchGenres';
import GetRandomNumber from './utilities/GetRandomNumber';

export default function App() {
  const [pop_movies, setPopMovies] = useState();
  const [genres, setGenres] = useState();

  useEffect(() => {
    FetchPopularMovies(
      `${process.env.REACT_APP_POP_MOVIES}&page=${GetRandomNumber(500)}`,
      setPopMovies
    );
    FetchGenres(process.env.REACT_APP_GENRES, setGenres);
  }, []);

  return (
    <div className="App">
      <MainMenu />
      <section className="movie_content">
        {pop_movies
          ? pop_movies.map((mov) => {
              return (
                <MovieColumn
                  key={mov.id}
                  image={mov.poster_path}
                  title={mov.title}
                  rating={mov.vote_average}
                  actors={Genres_From_GenreIDs(mov.genre_ids, genres)}
                />
              );
            })
          : 'Loading...'}
      </section>
    </div>
  );
}