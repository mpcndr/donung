import axios from "axios";
import { useState } from "react";
import def from "../Def";

export default function Login(props) {
  let setTokenAdmin = props.setTokenAdmin;
  let isTokenAdmin = props.isTokenAdmin;
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let submit = async (e) => {
    e.preventDefault();
    let data = { email: email, password: password };
    axios.post(def.apiURL + "/admin", data).then((res) => {
      console.log(res.data);
      if (res.data.isSuccess == false) {
        console.log("login fail");
      } else {
        console.log("login success");
        setTokenAdmin(res.data.token, res.data.user);
        window.location.href = "/admin/dashboard";
      }
    });
  };
  return (
    <>
      {isTokenAdmin().isLogin == true ? (
        (window.location.href = "/admin/dashboard")
      ) : (
        <div
          class="container d-flex justify-content-center align-items-center"
          style={{
            height: "600px",
          }}
        >
          <div class="bg-dark text-white p-5 rounded">
            <form onSubmit={submit}>
              <h3>ADMIN</h3>
              <div class="mb-2 align-content-center">
                <label for="exampleInputEmail1" class="form-label">
                  อีเมลล์
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="อีเมลล์"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div class="mb-1">
                <label for="exampleInputPassword1" class="form-label">
                  รหัสผ่าน
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="รหัสผ่าน"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  จดจำฉัน?
                </label>
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-danger">
                  เข้าสู่ระบบ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
