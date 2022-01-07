// import axios from "axios";
import { Switch } from "@mui/material";
import { Link, Route, useParams } from "react-router-dom";
import "./movieCard.css";
import MovieTitle from './movieTitle'

// import def from "../../Def";
export default function Movie_list(props) {
  let movie = props.MovieList;
  return (
    <>
      <div class="movie-card">
        <Link to={`/movie/${movie.movie_title}`}>
          <div class="img-movie-new">
            <img src={movie.img} alt="Avatar" class="image" />
            <div class="description">
              <div class="text">
                <h5>{movie.movie_title}</h5>
                <p>{movie.genre}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
  //   }
}
