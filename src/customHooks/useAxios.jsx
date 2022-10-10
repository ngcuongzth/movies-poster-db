import axios from 'axios';
import React, {useState, useEffect} from 'react';

const useAxios = (url) =>{
    const [myResponse, setMyResponse] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const fetchMovies = async () =>{
        setLoading(true)
        try {
            const response = await axios.get(url);
            const myResponse = response.data;
            setMyResponse(myResponse);
            setLoading(false);
        }
        catch(error){
            console.log(error);
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchMovies(url);
    }, [url])

        return {
            myResponse, loading
        }
}

export default useAxios;