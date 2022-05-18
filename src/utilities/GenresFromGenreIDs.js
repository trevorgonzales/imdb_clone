export default function GenreIDtoNames(genres_of_movie, genres_in_state) {
    let list = '';
    genres_of_movie.forEach((movie_genre) => {
      genres_in_state.forEach((stored_genre) => {
        if (stored_genre.id === movie_genre) {
          list =
            list === ''
              ? stored_genre.name
              : `${list}, ${stored_genre.name}`.trim();
        }
      });
    });
    return list;
  }
  