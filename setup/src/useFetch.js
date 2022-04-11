import React, {useState, useEffect} from "react";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const useFetch = (urlParams) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({show:false, msg:''});
    const [data, setData] = useState(null);

    const fetchMovies = async (url) => {    // fetching data from API   and setting it to data
        setIsLoading(true);
        try{
            const response = await fetch(url);  // fetching data from API   and setting it to data
            const data = await response.json(); // fetching data from API   and setting it to data

            if(response.status === 'True'){ 
                setData(data.Search || data);   
                setError({show:false, msg:''}); // if data is not empty then set error to false
            }else{
                setError({show:true, msg:data.Error});  // if data is empty then set error to true
            }
            setIsLoading(false);    // set isLoading to false
        }catch(error){
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchMovies(`${API_ENDPOINT}${urlParams}`); 
    }, [urlParams]);
    return {isLoading, error, data};    // return data
}

export default useFetch;