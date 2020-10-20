import React,  {useState, useEffect} from 'react';
import axios from './asxios'
 
function Row({title, fetchUrl}) {
    const [newMovies, setNewMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setNewMovies(request.data.results)
            return request;
        }
        

        fetchData();
    }, [fetchUrl]);

    return(
        <div>
            <h2>{title}</h2>

        </div>
    )
} 

export default Row;