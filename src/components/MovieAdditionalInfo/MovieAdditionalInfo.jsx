import { Link } from "react-router-dom";
import css from "./MovieAdditionalInfo.module.css";

export default function MovieAdditionalInfo() {
    return (
        <ul className={css.additionalInfoList}>
            <li>
                <Link to="cast">Cast</Link>
            </li>
            <li>
                <Link to="reviews">Reviews</Link>
             </li>
        </ul>
    )
}