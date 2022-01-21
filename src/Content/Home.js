import MovieCard from "../Content/Movie/MovieCard";
import axios from "axios";
import { useEffect, useState } from "react";
import def from "../Def";
import "./home.css";
import movieTitle from "./Movie/movieTitle";
import { useCookies } from "react-cookie";

export default function Home() {

  const [movielist, setMovie] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [cookie, setCookie, removeCookie] = useCookies(["username", "token"]);

  async function f() {
    let response = await axios.get(def.apiURL + "/getAll");
    setMovie(response.data.res_movie);
    console.log(response.data.res_movie);
    if (cookie.username != "" && cookie.username != undefined) {
      let res = await axios.get(
        def.apiURL + "/getfavourite?user=" + cookie.username,
        {
          headers: {
            Authorization: cookie.token,
          },
        }
      );
      if (res.data.isSuccess == true) {
        setFavourite(res.data.fav_list);
        console.log(res.data.fav_list);
      }
    }
  }

  useEffect(() => {
    // let response = await axios.get(def.apiURL + "/getAll");
    // setMovie(response.data.res_movie);
    // console.log(response.data.res_movie);

    // axios.get(def.apiURL + "/getAll").then((res) => {
    //   setMovie(res.data.res_movie);
    //   console.log(res.data.res_movie);
    // });

    f();
  }, []);

  return (
    <div class="container">
      <div class="movie-trade">
        <div class="text-trend container">
          <h5>มาใหม่สัปดาห์นี้</h5>
        </div>
        <div class="card-movie">
          <MovieCard movielist={movielist} favourite={favourite} setFavourite={setFavourite}/>
        </div>
      </div>
      <div>
        <div class="text-trend container">
          <h5>ติดเทรนในประเทศไทย</h5>
        </div>
        <div class="card-movie">
          <MovieCard movielist={movielist} favourite={favourite} setFavourite={setFavourite}/>
        </div>
      </div>
    </div>
  );
}
