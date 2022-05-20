import React, { useEffect, useState,} from 'react'
import Request from '../request';
import axios from '../axios';
import './banner.css'

const Banner = () => {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Request.fetchNetFlixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);


  function truncate(string, n) {
      return string?.length > n ?string.substr(0, n-1) + '...':string;
  }

  return (
    <header className='banner' style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path} ")`,
        backgroundPosition:" center",
        backgroundSize:"cover",
    }}>
        <div className='banner__contents'>
            <h1 className='banner__title'>
              {movie?.name}
            </h1>
            <div className='banner__buttons'>
              <button className='banner_button'>Play</button>
              <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
        </div>

        <div className='banner__bottom'/>

    </header>
  )
}

export default Banner