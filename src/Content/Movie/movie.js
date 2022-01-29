// import axios from "axios";
import { Switch } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
import "./movieCard.css";
import MovieTitle from "./movieTitle";
import def from "../../Def";
import { useCookies } from "react-cookie";
import { userAuthPost } from "../../Helper/apiHelper";

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
    window.location.href = `/movie/${movie.movie_title}`;
  };

  let clickFav = (e) => {
    // alert(isFavorite.isFav)
    if (favList.findIndex((fav) => fav == movie.movie_title) == -1) {
      if (cookie.username == "" && cookie.username == undefined) {
        return;
      }
      let data = {
        user: cookie.username,
        movie: movie.movie_title,
      };
      console.log(cookie.username);
      userAuthPost("/favmovie", data, cookie.token).then((res) => {
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
      let data = {
        user: cookie.username,
        movie: movie.movie_title,
      };
      userAuthPost("/deleteMovieFav", data, cookie.token)
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
      <div
        class="movie-wrap"
        onMouseOver={() => {
          document
            .getElementById("img-" + movie.movie_id)
            .classList.add("image-hover");
        }}
        onMouseOut={() => {
          console.log("asdasds");
          document
            .getElementById("img-" + movie.movie_id)
            .classList.remove("image-hover");
        }}
      >
        <div class="image" onClick={clickMovie}>
          <img
            id={"img-" + movie.movie_id}
            src={movie.img}
            alt="Avatar"
            class="image-movie"
          />
        </div>
        <div class="wrap-card">
          <div class="description" onClick={clickMovie}>
            <div class="title">
              <p class="text-title text-truncate m-0 ms-1">
                {movie.movie_title}
              </p>
            </div>
            <div class="genre">
              <p class="text-genre text-truncate m-0 ms-1">{movie.genre}</p>
            </div>
          </div>
          {isFavorite.isFav == false ? (
            <div class="add-favourite" onClick={clickFav}>
              <a class="icon text-decoration-none" href="#">
                <i class="bi bi-plus-lg ms-1"></i>
                <span class="text-fav">เพิ่มในรายการโปรดของฉัน</span>
              </a>
            </div>
          ) : (
            <div class="add-favourite" onClick={clickDelete}>
              <a class="icon text-decoration-none" href="#">
                <i class="bi bi-check-lg ms-1"></i>
                <span class="text-fav">ลบออกจากรายการโปรด</span>
              </a>
            </div>
          )}
        </div>
      </div>
      {/* <div class="movie-card">
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
        
      </div> */}
    </>
  );
}
