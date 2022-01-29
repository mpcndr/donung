export default function MovieManage(props) {
  let movieList = props.movieList;
  let setMovieList = props.setMovieList;
  return (
    <>
      <h4>Movie Management</h4>
      <button type="button" class="btn btn-success btn-sm my-2">
        <i class="bi bi-plus-lg me-1"></i>
        เพิ่มหนัง
      </button>
      <div class="table-responsive">
        <table class="table table-striped table-hover text-center">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Movie Name</th>
              <th scope="col">manage</th>
            </tr>
          </thead>
          <tbody>
            {movieList &&
              movieList.map((movieLists) => {
                return (
                  <tr class="align-middle">
                    <th scope="row">{movieLists.movie_id}</th>
                    <td>{movieLists.movie_title}</td>
                    <td>
                      <button type="button" class="btn btn-primary  btn-sm me-3">
                        <i class="bi bi-pencil-square me-1"></i>
                        แก้ไข
                      </button>
                      <button type="button" class="btn btn-danger btn-sm">
                      <i class="bi bi-trash me-1"></i>
                            ลบ
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
