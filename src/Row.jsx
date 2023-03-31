import React,{useState , useEffect} from 'react';
import axios from "./axios"; 
import "./Row.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({title,fetchUrl,original}) => {
    const [movie,setmovie] = useState([]);
    const [movieUrl,setmovieUrl] = useState("");

    useEffect(() => {
      async function fetchData(){
        const request = await axios.get(fetchUrl);
        setmovie(request.data.results);
        return request;
    } 
      fetchData();
    }, [fetchUrl])

    const opts = {
      height:"390",
      width:"100%",
      playerVars:{

        autoplay:1, 
      }
    }

    const handleClick = (movies) =>{
      if (movieUrl) {
        setmovieUrl("");
      }else{
        movieTrailer(movies?.name || "").then((url)=>{
            const urlParams = new URLSearchParams(new URL(url).search);
            setmovieUrl(urlParams.get("v"));
        })
        .catch((error)=>console.log(error));
      }


  }

     
    
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row__posters">
        { movie.map(movies=>{return(
          <img
          key={movies.id}
          onClick={()=>handleClick(movies)}
          className={`row_poster ${original && "larger"}` }src={`${base_url}${
            original? movies.poster_path : movies.backdrop_path}`} alt={movies.name}/>)
        })}
      </div>
     {movieUrl && <YouTube videoId={movieUrl} opts={opts} />}
    </div>
  )
}

export default Row;
