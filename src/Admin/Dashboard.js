import axios from "axios";
import { useEffect, useState } from "react";
import UserManagement from "./Content/UserManagement";
import def from "../Def"

export default function Dashboard() {

  let [admin, setAdmin] = useState([]);

  async function getAddmin() {
    let response = await axios.get(def.apiURL + "/allAdmin")
    setAdmin(response.data)
    console.log(response.data.admin);
  }
  useEffect(()=>{
    getAddmin();
  }, [])
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
                class="nav-link active"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Home
              </button>
              <button
                class="nav-link"
                id="v-pills-user-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                User Management
              </button>
              <button
                class="nav-link"
                id="v-pills-movie-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-movie"
                type="button"
                role="tab"
                aria-controls="v-pills-movie"
                aria-selected="false"
              >
                Movie
              </button>
              <button
                class="nav-link"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Settings
              </button>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              home
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <UserManagement />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-movie"
              role="tabpanel"
              aria-labelledby="v-pills-movie-tab"
            >
              movie
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
