import axios from "axios";
import { useEffect, useState } from "react";
import UserManagement from "./Content/UserManagement";
import MovieManage from "./Content/MovieManage";
import def from "../Def";
import { useCookies } from "react-cookie";
import { adminAuthGet, apiGet } from "../Helper/apiHelper";

export default function Dashboard() {
  let [admin, setAdmin] = useState([]);
  let [movieList, setMovieList] = useState([]);
  let [cookieAdmin, setCookieAdmin, removeCookieAdmin] = useCookies([
    "userAdmin",
    "tokenAdmin",
  ]);
  let [mode, setMode] = useState("home");

  async function getData() {
    if (cookieAdmin.userAdmin != "" && cookieAdmin.userAdmin != undefined) {
      let resAdmin = await adminAuthGet(
        "/administrator",
        cookieAdmin.tokenAdmin
      );
      setAdmin(resAdmin.data.admin);
      console.log(resAdmin);
    }

    let resMovie = await apiGet("/getAll");
    setMovieList(resMovie.data.res_movie);
    console.log(resMovie.data.res_movie);
  }
  useEffect(() => {
    getData();
    const search = window.location.search;
    const params = new URLSearchParams(search);
    let mode = params.get("mode");
    console.log(mode);
    if (mode == "home") {
      setMode("home");
      // document.getElementById("v-pills-home-tab").className = "nav-link active";
      // document.getElementById("v-pills-user-tab").className = "nav-link";
      // document.getElementById("v-pills-movie-tab").className = "nav-link";
      // document.getElementById("v-pills-settings-tab").className = "nav-link";
    }
    if (mode == "usermanagement") {
      setMode("usermanagement");
      // document.getElementById("v-pills-home-tab").className = "nav-link";
      // document.getElementById("v-pills-user-tab").className = "nav-link active";
      // document.getElementById("v-pills-movie-tab").className = "nav-link";
      // document.getElementById("v-pills-settings-tab").className = "nav-link";
    }
    if (mode == "moviemanagement") {
      setMode("moviemanagement");
      // document.getElementById("v-pills-home-tab").className = "nav-link";
      // document.getElementById("v-pills-user-tab").className = "nav-link";
      // document.getElementById("v-pills-movie-tab").className =
      //   "nav-link active";
      // document.getElementById("v-pills-settings-tab").className = "nav-link";
    }
    if (mode == "profileadmin") {
      setMode("profileadmin");
      // document.getElementById("v-pills-home-tab").className = "nav-link";
      // document.getElementById("v-pills-user-tab").className = "nav-link";
      // document.getElementById("v-pills-movie-tab").className = "nav-link";
      // document.getElementById("v-pills-settings-tab").className =
      //   "nav-link active";
    }
  }, []);
  return (
    <>
      <div class="row mx-3 mt-4">
        <div class="col-3 mr-2">
          <div class=" d-flex align-items-start justify-content-center">
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                class={mode == "home" ? "nav-link active" : "nav-link"}
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
                onClick={() => {
                  let url = new URL(window.location.href);
                  url.searchParams.set("mode", "home");
                  window.history.replaceState(null, null, url);
                }}
              >
                Home
              </button>
              <button
                class={
                  mode == "usermanagement" ? "nav-link active" : "nav-link"
                }
                id="v-pills-user-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
                onClick={() => {
                  let url = new URL(window.location.href);
                  url.searchParams.set("mode", "usermanagement");
                  window.history.replaceState(null, null, url);
                }}
              >
                User Management
              </button>
              <button
                class={
                  mode == "moviemanagement" ? "nav-link active" : "nav-link"
                }
                id="v-pills-movie-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-movie"
                type="button"
                role="tab"
                aria-controls="v-pills-movie"
                aria-selected="false"
                onClick={() => {
                  let url = new URL(window.location.href);
                  url.searchParams.set("mode", "moviemanagement");
                  window.history.replaceState(null, null, url);
                }}
              >
                Movie
              </button>
              <button
                class={mode == "profileadmin" ? "nav-link active" : "nav-link"}
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
                onClick={() => {
                  let url = new URL(window.location.href);
                  url.searchParams.set("mode", "profileadmin");
                  window.history.replaceState(null, null, url);
                }}
              >
                Profile
              </button>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              home
            </div>
            <div
              class="tab-pane fade show active"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <UserManagement
                admin={admin}
                setAdmin={setAdmin}
                cookieAdmin={cookieAdmin}
              />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-movie"
              role="tabpanel"
              aria-labelledby="v-pills-movie-tab"
            >
              <MovieManage
                movieList={movieList}
                setMovieList={setMovieList}
              ></MovieManage>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              settings
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
