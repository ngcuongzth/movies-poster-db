import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalContext } from '../store/context'
import { useContext } from 'react'
const defaultImg = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
const SingleMoviesPage = () => {
    const {state} = useContext(GlobalContext);
    const {id} = useParams();
    const {movies} = state;
    const movie = movies.find((movie, index)=>{
        return movie.imdbID === id;
    })
    console.log(movie)
    if(movie){
        const {Poster, Title, Year, imdbID} = movie;
        return (
            <section className="single-movie">
                <img src={Poster === 'N/A' ? defaultImg : Poster} alt={Title} />
            <div className="single-movie-info">
                <h2>{Title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Impedit sit blanditiis eius fuga sapiente exercitationem, 
                    temporibus consequuntur molestias odio mollitia, a ab labore 
                    ratione, magni vitae ducimus alias officiis dolorem!</p>
                <h4>{Year}</h4>
                <Link className="btn" to="/">back to movies</Link>
            </div>
            </section>
        )
    }
  return (
    <div>SingleMoviesPage</div>
  )
}

export default SingleMoviesPage