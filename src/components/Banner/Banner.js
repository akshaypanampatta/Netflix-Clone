import React, { useEffect, useState } from 'react'
import  './Banner.css'
import { apiKey, imageUrl } from '../../constants/constants';
import axios from 'axios';


function Banner() {
 const [movie,setMovie]=useState()
      useEffect(() => {
        axios.get(
          `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`
        ).then((response)=>{
          
          setMovie(response.data.results[2]);
        });
       
      
        return 
      }, [])
      
  return (
    
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+ movie.backdrop_path : ""})`}}
    className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="buttons">
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h2 className='description'>{movie? movie.overview : ""}</h2>
      </div>
      <div className="fade-bottom">

      </div>
    </div>
  );
}

export default Banner