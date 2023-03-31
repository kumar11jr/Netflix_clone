import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from "./requests"
import "./corosal.css"

const Corosal = () => {
  const  [movie,setmovie] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginal);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      )
   }
    fetchData();
  },[])
  return (
    <header className='corosal'
    style={{backgroundSize:"cover",
    backgroundImage:`url(
      "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
    backgroundPosition:"center center",
  }}
    > 
      <div className="contents">
       <h1>
        {movie?.title || movie?.name || movie?.original_name}
       </h1>
       <div className="buttons">
        <button>Play</button>
        <button>Suscribe</button>
       </div>
       <h2>{movie?.overview}</h2>
      </div>
      <div className="fade"></div>
    </header>
  )
}

export default Corosal;
