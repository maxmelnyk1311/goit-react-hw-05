import { useParams, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';

import { getMovieDetails, getMovieCast } from "../API/imagesAPI";

import MovieDetails from '../components/MovieDetails/MovieDetails';
import MovieAdditionalInfo from '../components/MovieAdditionalInfo/MovieAdditionalInfo';
// import Loader from "../components/Loader/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage.jsx";

export default function MovieDetailsPage() {
    const {movieId} = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    // const [loading , setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                setError(false);
                // setLoading(true);
                const movieItems = await getMovieDetails(movieId);
                setMovieDetails(movieItems);
                getMovieCast(movieId);
            }
            catch (error) {
                setError(true);
            } finally {
                // setLoading(false);
            }
        }
        getData();
    }, [movieDetails, movieId])

    
    return (
        <>
            {/* {loading && <Loader />} */}
            {error && <ErrorMessage/>}
            {movieDetails &&
                <>
                    <MovieDetails movie={movieDetails} />
                    <MovieAdditionalInfo />
                </>
            }
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </>
    )
}