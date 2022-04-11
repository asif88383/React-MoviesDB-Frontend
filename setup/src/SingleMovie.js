import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
import useFetch from './useFetch'

const SingleMovie = () => {
  const { id } = useParams()  // getting id from url  and setting it to id  (id is a string)
  const {isLoading, error, data: movie} = useFetch(`&id=${id}`) // fetching data from API   and setting it to data

  if(isLoading){  // if data is loading then show loading
    return <div className='loading'></div>
  }

  if(error.show){ // if data is empty then show error message
    return (
      <div className='page-error'>  
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>Go back to Movies</Link>
      </div>
    )
  }

  const {Poster: poster,Title: title, Plot: plot, Year: year} = movie // getting data from data and setting it to variables 

  return (
    <section className='single-movie'>
      <img src={poster} alt={title} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>Go back to Movies</Link>
      </div>
    </section>
  )
}

export default SingleMovie
