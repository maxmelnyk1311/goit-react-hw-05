import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getMovieReviews } from "../../API/imagesAPI";

import css from './MovieReviews.module.css';

export default function MovieReviews() {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState(null);
    const [noReviews, setNoReviews] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                const data = await getMovieReviews(movieId);
                if (data.length == 0) {
                    setNoReviews(true)
                } else {
                    setReviews(data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [movieId])
    
    return (
        <>
            {noReviews && 
                <p className={css.noReviewsTitle}>There is no reviews for this film</p>
            }
            {reviews && 
                <ul className={css.reviewsList}>
                    {reviews.map((review) => {
                        return (
                            <li className={css.reviewCard}
                                key={review.id}
                            >
                                    <p>{review.author}</p>
                                    <p>{review.content}</p>
                            </li>
                        )
                    })}
                </ul>
            }        
        </>
    )
}