import { Link } from 'react-router-dom';
import './MainMenu.css';
import movie_img from '../assets/movies.png';
import tv_img from '../assets/tv.png';
import actors_img from '../assets/actors.png';
import watchlist_img from '../assets/watchlist.png';

export default function MainMenu() {
  return (
    <section className="main_menu">
      <Link to="/" title="Home" className="logo">
        <div>IMDb</div>
      </Link>
      <Link to="/Movie" title="Movies">
        <img src={movie_img} alt="movies" />
        <p>Movies</p>
      </Link>
      <Link to="/Shows" title="Shows">
        <img src={tv_img} alt="shows" />
        <p>Shows</p>
      </Link>
      <Link to="/Actors" title="Actors">
        <img src={actors_img} alt="actors" />
        <p>Actors</p>
      </Link>
      <Link to="/WatchList" title="Watchlist">
        <img src={watchlist_img} alt="watchlist" />
        <p>Watchlist</p>
      </Link>
    </section>
  );
}
