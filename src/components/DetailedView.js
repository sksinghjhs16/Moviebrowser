import React from 'react';
import Hero from './Hero';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const DetailedView = () => {
    const { id } = useParams();
    let posterURL = "";
    const [movieDetails, setMovieDetails] = useState({});
    let release =""
    let overview =""
    useEffect ( () => {
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=14c46932b9b87948ea22f6bb7b24eaef&language=en-US`)
            .then(response => response.json())
            .then(data => {
            setMovieDetails(data)
          })
      }, [id])
    const backdrop = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
    if (movieDetails.poster_path == null){
        posterURL = "http://ht.ksdr1.net/wp-content/uploads/sites/3/2016/06/no-picture-available-icon-8.png"
    }
    else {
        posterURL = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
    }
    if (movieDetails.release_date === ""){
        release = "Yet to be released."
    }
    else {
        release = movieDetails.release_date
    }
    if (movieDetails.overview === ""){
        overview = "Not available.."
    }
    else {
        overview = movieDetails.overview
    }

    return (
        <>
        <Hero text={movieDetails.original_title} backdrop={backdrop} classHero="herotext"/>
        <div className="container">
            <div className="navbar_flexbox" style={{alignItems: 'flex-start'}}>
                <div className="detailedViewL"><img className="image" src={posterURL} alt={movieDetails.original_title}></img></div>
                <div className="detailedViewR">
                    <h3 style={{textAlign: 'left'}}>{movieDetails.original_title}</h3>
                    <p>Released on: {release}</p>
                    <p style={{textAlign: 'justify'}}>OVERVIEW: {overview}</p>
                </div>
            </div> 
        </div>
        </>
    )
}
export default DetailedView;