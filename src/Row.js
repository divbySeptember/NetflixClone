import React,  {useState, useEffect} from 'react';
import axios from './asxios';
import './Row.css';

const base_url = " https://image.tmdb.org/t/p/original/";
 
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
    console.log(newMovies)

    return(
        <div className="row">

            <h2>{title}</h2>

            <div className="rowPosters">

                {newMovies.map( movie => (
                   <img className="rowPoster" src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                ))}


            </div>

        </div>
    )
} 

export default Row;