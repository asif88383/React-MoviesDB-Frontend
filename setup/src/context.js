import React, { useState, useContext, useEffect } from 'react'
import useFetch from './useFetch'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=31d9dd4`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('batman')
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`)

  
  console.log("movie" + movies)

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
