import { useState, useEffect } from "react";

import { getTrendingMovies } from '../API/imagesAPI';

import MovieList from "../components/MovieList/MovieList";
// import Loader from "../components/Loader/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage.jsx";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    // const [loading , setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                setError(false);
                // setLoading(true);
                const trendingMovies = await getTrendingMovies();
                setMovies(trendingMovies)
            } catch(error) {
                setError(true);
            } finally {
                // setLoading(false);
            }
        }
        getData();
    }, [])

    return (
        <>  
            {/* {loading && <p>Loading page...</p>} */}
            {error && <ErrorMessage/>}
            {movies.length > 0 && 
                <>
                    <h1>Trending today</h1>
                    <MovieList movies={movies} />
                </>
            }
        </>
    )
}