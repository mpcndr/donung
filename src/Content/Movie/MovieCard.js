import Movie from "./movie";
export default function movieCard(props) {
  let movies = props.movielist;
  return (
    <>
      <div class="row row-cols-1 row-cols-md-6 g-md-0">
        {movies &&
          movies.map((movie) => {
            return (
              <div class="col">
                <div class="container">
                  <Movie MovieList={movie} />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
