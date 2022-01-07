import { useParams } from "react-router-dom";

export default function MovieTitle() {
    let {movietitle} = useParams();
  return (
    <>
      <h1>Movie Title</h1>
      <h1>{movietitle}</h1>
    </>
  );
}
