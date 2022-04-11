import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const {movies, isLoading} = useGlobalContext()  // getting data from context and setting it to variables

  if(isLoading){  // if data is loading then show loading
    return <div className='loading'></div>  // loading
  }

  if(movies.length === 0){  // if data is empty then show error message
    return (
      <div className='page-error'>
        <h1>No movies found</h1>
        <Link to='/' className='btn'>Go back to Movies</Link>
      </div>
    )
  }

  return (
    <section className='movies'>
      {movies.map((movie) => {
        const{imdbID: id, Poster: poster, Title: title, Year: year} = movie // getting data from data and setting it to variables

        return (
          <Link to={`/movie/${id}`} key={id} className='movie'>
            <article>
              <img src={poster === 'N/A' ? url : poster} alt={title} />
              <div className='movie-info'>
                <h4 className='title'>{title}</h4>
                <p className='year'>{year}</p>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  )
}

export default Movies
