import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";

import css from "./MovieDetails.module.css";

export default function MovieDetails({movie}) {
    const location = useLocation();
    const backLinkRef = useRef(location.state ?? "/");
    return(
        <>
            <div className={css.movieInfoWrp}>
                <button
                className={css.backLinkBtn}
                    type="button">
                        <Link to={backLinkRef.current}>Go back</Link>
                </button>
                <div className={css.movieInfoContainer}>
                    <div>
                        <img 
                            className={css.moviePoster}
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </div>
                    <div>
                        <h2>{movie.title} ({movie.release_date.slice(0, 4)})</h2>
                        <p>User Score: {Math.round(movie.popularity)} %</p>
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                        <h3>Genres</h3>
                        <p>{movie.genres.map(genre => {
                            return `${genre.name} `
                        })}</p>
                    </div>
                </div>
            </div>
        </>
    )
}