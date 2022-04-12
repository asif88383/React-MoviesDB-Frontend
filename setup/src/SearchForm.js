import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {query, setQuery, error} = useGlobalContext() // getting data from context and setting it to variables
  console.log("query in serchform " + query)

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>Search Movies</h2>
      <input
        type='text'
        placeholder='Search...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='form-input'
      />
      {error.show && <div className='error'>{error.msg}</div>}
    </form>
  )
}

export default SearchForm
