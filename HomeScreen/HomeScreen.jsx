import React from 'react'
import './homescreen.css'
import Nav from '../../Container/Nav/Nav'
import Banner from '../Banner/Banner'
import Rows from '../Rows'
import request from '../request'

const HomeScreen = () => {
  return (
    <div className='homescreen'>
        <Nav/>
        <Banner/>
        <Rows  title = 'NETFLIX ORIGINALS'
               fetchUrl= {request.fetchNetFlixOriginals}
               isLargeRow
        /> 
        <Rows  title = 'Trending Now'
               fetchUrl= {request.fetchTrendng}
        /> 
        <Rows  title = 'Top Rated'
               fetchUrl= {request.fetchtopRate}
        /> 
        <Rows  title = 'Horror Movies'
               fetchUrl= {request.fetchHorrorMovies}
        /> 
        <Rows  title = 'Comedy'
               fetchUrl= {request.fetchComedyMovies}
        /> 
        <Rows  title = 'Romance Movies'
               fetchUrl= {request.fetchRomanceMovies}
        /> 
        <Rows  title = 'Action Movies'
               fetchUrl= {request.fetchActionMovies}
        /> 
        <Rows  title = 'Documentries'
               fetchUrl= {request.fetchtopRate}
        /> 
    </div>
  )
}

export default HomeScreen;