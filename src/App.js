import Header from "./Content/Header";
import Home from "./Content/Home";
import { Routes, Route, Link } from "react-router-dom";
import MovieTitle from "./Content/Movie/movieTitle";
import NavbarBottom from "./Content/NavbarBottom";
function App() {
  let x = 1;

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        ></Route>

        <Route
          path="/movie/:movietitle"
          element={
            <>
              <MovieTitle />
            </>
          }
        ></Route>
      </Routes>
      <NavbarBottom/>
      
    </div>
  );
}
export default App;
