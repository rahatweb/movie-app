import React, { useState } from 'react'
import Search from '../Components/Search'
import styled from 'styled-components'
import Movies from './Movies'

//  http://www.omdbapi.com/?s=${searchMovie}&apikey=56f08859 

const Home = () => {

    const [allMovieData, setAllMovieData]= useState([]);
    const [searchMovie, setSearchMovie]= useState('');
    const [loading, setLoading]= useState(false);

    const fetchMovieData = async ()=>{
          try {
            setLoading(true);
            const res = await fetch(`https://www.omdbapi.com/?s=${searchMovie}&apikey=56f08859`);
            const data = await res.json();
            setAllMovieData(data.Search);
            setLoading(false);

            
          } catch (error) {
            console.log(error);
            setLoading(false);
            
          }
    }

  return (
    <HomeComponent className='bg'>
      <Search searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData}/>
      <Movies allMovieData={allMovieData} loading={loading} />
    </HomeComponent>
  )
}
const HomeComponent = styled.div`
    min-height: 100vh;

`

export default Home
