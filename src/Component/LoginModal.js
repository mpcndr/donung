import axios from "axios";
import { useState } from "react";
import def from "../Def";

export default function LoginModal(props) {
  let setToken = props.setToken;
  console.log(setToken);
  let [user, setUser] = useState("");
  let [password, setPassword] = useState("");

  let login = async (e) => {
    e.preventDefault();
    let data = { username: user, password: password };
    axios
      .post(def.apiURL + "/login", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.isSuccess == false) {
          console.log("login fail");
        } else {
          console.log("login success");
          setToken(res.data.token, res.data.user);
          // alert(JSON.stringify(res.data.fav_list));
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              เข้าสู่ระบบ
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="row g-3">
              <label for="username" class="col-4 d-flex justify-content-center">
                Username
              </label>
              <div class="col-7">
                <input
                  class="form-control form-control-sm"
                  type="text"
                  id="username"
                  placeholder="username"
                  value={user}
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                ></input>
              </div>

              <label for="username" class="col-4 d-flex justify-content-center">
                Password
              </label>
              <div class="col-7">
                <input
                  class="form-control form-control-sm"
                  type="password"
                  id="username"
                  placeholder="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              ยกเลิก
            </button>
            <button type="button" class="btn btn-primary" onClick={login}>
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
