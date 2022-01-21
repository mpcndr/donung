import Movie from "./movie";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6.5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};

export default function movieCard(props) {
  let movies = props.movielist;
  let favourite = props.favourite;
  let setFavourite = props.setFavourite;
  return (
    <>
      {/* <div class="row row-cols-1 row-cols-md-6 g-md-0"> */}
      <Carousel responsive={responsive}>
        {movies &&
          movies.map((movie) => {
            return (
              <div class="col">
                <div class="container">
                  <Movie MovieList={movie} favourite={favourite} setFavourite={setFavourite}/>
                </div>
              </div>
            );
          })}
      </Carousel>

      {/* </div> */}
    </>
  );
}
