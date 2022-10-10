import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../store/context';

const defaultImg = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const { state } = useContext(GlobalContext);
  const { movies } = state;
  return <section className="movies">
    {movies.map((movie) => {
      const { Poster, Title, Year, imdbID } = movie;
      return (
        <Link to={`movies/${imdbID}`} className="movie" key={imdbID}>
          <article>
            <img src={Poster === 'N/A' ? defaultImg : Poster} alt={Title} />
          </article>
          <div className="movie-info">
            <h4 className="title">{Title}</h4>
            <p>{Year}</p>
          </div>
        </Link>
      )
    })}
  </section>
}

export default Movies
