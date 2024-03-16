import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import {getMoviesByQuery} from '../API/imagesAPI';

import SearchForm from "../components/SearchForm/SearchForm";
import MovieList from "../components/MovieList/MovieList";
// import Loader from "../components/Loader/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage.jsx";

export default function MoviesPage() {
    const [movies, setMovies] = useState(null);
    const [query, setQuery] = useState("");
    const [params, setParams] = useSearchParams();
    // const [loading , setLoading] = useState(false);
    const [error, setError] = useState(false);

    function handleSearch(query) {
        params.set("query", query);
        setParams(params);
        setQuery(query);
        getMoviesByQuery(query);
    }

    useEffect(() => {
        async function getData() {
            try {
                setError(false);
                // setLoading(true);
                let moviesByQuery;
                const savedQuery = params.get("query");
                if (savedQuery == null) {
                    moviesByQuery = await getMoviesByQuery(query);
                } else {
                    moviesByQuery = await getMoviesByQuery(savedQuery);
                }
                setMovies(moviesByQuery)
            } catch(error) {
                setError(true);
            } finally {
                // setLoading(false);
            }
        }
        getData();
    }, [query, movies, params])

    return (
        <>
            {/* {loading && <Loader />} */}
            {error && <ErrorMessage/>}
            <SearchForm onSearch={handleSearch}/>
            {movies && 
                <MovieList movies={movies} />
            }
        </>
    )
}