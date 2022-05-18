import './MovieColumn.css';
export default function MovieColumn({ title, rating, genres, image }) {
  const img_path = 'https://www.themoviedb.org/t/p/original';
  return (
    <>
      <div
        className="movie_column"
        style={{
          backgroundImage: `url(${img_path}/${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="movie_column--title">
          <span>Movie</span>
          <h3>{title}</h3>
        </div>
        <div className="movie_column--brief">
          <div className="rating">{rating}</div>
          <p>{genres}</p>
        </div>
      </div>
    </>
  );
}
