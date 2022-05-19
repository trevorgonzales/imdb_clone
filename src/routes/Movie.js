import { Link } from 'react-router-dom';
import './Movie.css'
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import search from '../assets/search.svg';
import play_button from '../assets/play.svg';
import Format_Year from '../utilities/Format_Year'
import { useEffect, useState } from 'react';

export default function Movie() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    FetchMovie()
  },[])

const FetchMovie = async () => {
  const response = await fetch(`${process.env.REACT_APP_MOVIES}/75780?${process.env.REACT_APP_KEY}`);
  const data = await response.json();
  setMovie(data)
  console.log(data)
}

const img_path = 'https://www.themoviedb.org/t/p/original';

  return (
    <>
    {movie ? (
      <div className='movie_container' style={{
        backgroundImage: `url(${img_path}/${movie.backdrop_path})`
      }}>
        <div className='movie_page'>
        <header>
          <Link to='/' className='logo'>IMDb</Link>
          <div className='user'>
            <p>Johnny Appleseed</p>
            <span></span>
          </div>
        </header>

        <section>
          <div className='social_bar'>
              <Link to='/'><img src={twitter} alt='twitter' /></Link>
              <Link to='/'><img src={facebook} alt='facebook' /></Link>
              <Link to='/'><img src={instagram} alt='instagram' /></Link>
              <img className='search_icon' src={search} />
          </div>

          <div className='trailer_area'>
            <div>
            <img src={play_button} alt="play trailer" />
            <span>Play</span>
            </div>
          </div>

          <div className='details_bar'>
              <Link to='/'><img src={twitter} alt='twitter' /></Link>
              <Link to='/'><img src={facebook} alt='facebook' /></Link>
              <Link to='/'><img src={instagram} alt='instagram' /></Link>
          </div>

          <div className='movie_title'>
            <span>{Format_Year(movie.release_date)}</span>
            <h1>{movie.original_title}</h1>
          </div>

          <div className='rating_area'>
            <div className='rating_star'>Star</div>
            <div className='rating_details'>
              <span>{movie.vote_average}</span>
              <span>{movie.vote_count}</span>
            </div>
            <div className='rating_like'>Like</div>
          </div>
        </section>
        </div>
      </div> 
    ) : 'loading'}
    </>
  )
}