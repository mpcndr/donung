import Dashboard from "./Dashboard";

export default function Header({ isTokenAdmin, removeTokenAdmin }) {
  
  console.log(isTokenAdmin());
  return (
    <>
      {isTokenAdmin().isLogin == true ? (
        <>
          <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
              <div class="container-fluid">
                <a class="navbar-brand" href="/admin/dashboard">
                  Admin
                </a>
                <div class="d-flex justify-content-end">
                  <a class="text-decoration-none align-items-center mt-2 mx-2 text-danger col-6 text-truncate">{isTokenAdmin().username}</a>
                  <a
                    class="navbar-brand"
                    href="/admin"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="ออกจากระบบ"
                    style={{
                      fontSize: "16px",
                    }}
                    onClick={() => {
                      removeTokenAdmin();
                    }}
                  >
                    <img
                      src={require("../image/logout.png").default}
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                    ></img>
                  </a>
                </div>
              </div>
            </nav>
            <Dashboard isTokenAdmin={isTokenAdmin}/>
          </div>
        </>
      ) : (
        (window.location.href = "/admin")
      )}
    </>
  );
}
