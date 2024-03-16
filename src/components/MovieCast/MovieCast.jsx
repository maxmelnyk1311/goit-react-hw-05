import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMovieCast } from "../../API/imagesAPI";

// import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

import css from "./MovieCast.module.css";

export default function MovieCast() {
    const [movieCast, setMovieCast] = useState(null);
    const {movieId} = useParams();
    // const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                setError(false);
                // setLoading(true);
                const data = await getMovieCast(movieId);
                setMovieCast(data);
            } catch (error) {
                setError(true);
            } finally {
                // setLoading(false);
            }
        }
        getData();
    }, [movieCast, movieId]);

    return (
        <>
            {/* {loading && <Loader />} */}
            {error && <ErrorMessage/>}
                {movieCast && 
                    <ul className={css.castWrp}>
                        {movieCast.map((item) => {
                            return (
                                <li 
                                    className={css.castCard}
                                    key={item.id}
                                >
                                    <img
                                        className={css.actorImage}
                                        src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                                        alt={item.name}
                                    />
                                    <p>{item.name}</p>
                                    <p>Character: {item.character}</p>
                                </li>
                            )
                        })}
                    </ul>
                }
            
        </>
    )
}