// import axios from "axios";
import { Switch } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
import "./movieCard.css";
import MovieTitle from "./movieTitle";
import def from "../../Def";
import { useCookies } from "react-cookie";

// import def from "../../Def";
export default function Movie_list(props) {
  const [cookie, setCookie, removeCookie] = useCookies(["username", "token"]);
  let [isFavorite, setFavorite] = useState({
    isFav: false,
  });

  let movie = props.MovieList;
  let favList = props.favourite;
  let setFav = props.setFavourite;

  let clickMovie = (e) => {
    // window.location.href = `/movie/${movie.movie_title}`;
  };

  let clickFav = (e) => {
    // alert(isFavorite.isFav)
    if (favList.findIndex((fav) => fav == movie.movie_title) == -1) {
      if (cookie.username == "" && cookie.username == undefined) {
        return;
      }
      console.log(cookie.username);
      axios
        .post(
          def.apiURL + "/favmovie",
          {
            user: cookie.username,
            movie: movie.movie_title,
          },
          {
            headers: {
              Authorization: cookie.token,
            },
          }
        )
        .then((res) => {
          if (res.data.isSuccess == true) {
            setFavorite({
              isFav: true,
            });
            let dummy = [...favList];
            dummy.push(movie.movie_title);
            setFav(dummy);
          }
        });
    }
  };

  let clickDelete = (e) => {
    if (favList.findIndex((fav) => fav == movie.movie_title) != -1) {
      if (cookie.username == "" && cookie.username == undefined) {
        return;
      }
      axios
        .post(
          def.apiURL + "/deleteMovieFav",
          {
            user: cookie.username,
            movie: movie.movie_title,
          },
          {
            headers: {
              Authorization: cookie.token,
            },
          }
        )
        .then((res) => {
          if (res.data.isSuccess == true) {
            setFavorite({
              isFav: false,
            });
            let dummy = [...favList];
            dummy = dummy.filter((d) => d != movie.movie_title);
            setFav(dummy);
          }
        });
    }
  };

  useEffect(() => {
    console.log(favList);
    let check = favList.findIndex((fav) => fav == movie.movie_title) != -1;
    let dummy = { isFav: check };
    setFavorite(dummy);
  }, [favList]);

  return (
    <>
      <div class="movie-card">
        {/* <Link to={`/movie/${movie.movie_title}`}> */}
        <div class="img-movie-new" onClick={clickMovie}>
          <img src={movie.img} alt="Avatar" class="image" />
          <div class="description">
            <div class="text">
              <h6 class="text-title">{movie.movie_title}</h6>
              <p class="text-genre">{movie.genre}</p>
            </div>
            <div class="add-fav">
              {isFavorite.isFav == false ? (
                <a href="#" class="text-decoration-none" onClick={clickFav}>
                  <img
                    src={require("../../image/plus.png").default}
                    style={{
                      width: "8px",
                      height: "8px",
                    }}
                  ></img>
                  <span class="text-genre text-light mx-1">
                    เพิ่มในรายการโปรดของฉัน
                  </span>
                </a>
              ) : (
                <a href="#" class="text-decoration-none" onClick={clickDelete}>
                  <img
                    src={require("../../image/check.png").default}
                    style={{
                      width: "8px",
                      height: "8px",
                    }}
                  ></img>
                  <span class="text-genre text-light mx-1">
                    ลบออกจากรายการโปรดของฉัน
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
        {/* </Link> */}
      </div>
    </>
  );
  //   }
}
