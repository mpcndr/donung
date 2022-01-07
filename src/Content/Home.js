import MovieCard from "../Content/Movie/MovieCard";
import axios from "axios";
import { useEffect, useState } from "react";
import def from "../Def";
import "./home.css";
import movieTitle from "./Movie/movieTitle";

export default function Home() {
  const [movielist, setMovie] = useState([]);

  async function f() {
    let response = await axios.get(def.apiURL + "/getAll");
    setMovie(response.data.res_movie);
    console.log(response.data.res_movie);
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
          <MovieCard movielist={movielist} />
        </div>
      </div>
      <div>
        <div class="text-trend container">
          <h5>ติดเทรนในประเทศไทย</h5>
        </div>
        <div class="card-movie">
          <MovieCard movielist={movielist} />
        </div>
      </div>
    </div>
  );
}
