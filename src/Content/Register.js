import axios from "axios";
import { useEffect, useState } from "react";
import def from "../Def";
import DialogRegis from "../Component/DialogRegis"

export default function Register() {
  let [user, setUser] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPwd, setConfirmpwd] = useState("");
  let [email, setEmail] = useState("");
  let [tel, setTel] = useState("");

  let submit = async (e) => {
    e.preventDefault();
    let data = { username: user, password: password, email: email, tel: tel };
    if (password == confirmPwd) {
      document.getElementById("check").innerHTML = "";
      let request = await axios.post(def.apiURL + "/register", data);
      document.getElementById("btn-regis").click();
    } else {
      document.getElementById("check").innerHTML = "รหัสผ่านไม่ตรงกัน";
      document.getElementById("check").style.color = "#e06666";
    }
  };
  useEffect(() => {
    if (user != "") {
      axios.get(def.apiURL + "/checkuser?username=" + user).then((res) => {
        if (res.data.isSuccess == true) {
          document.getElementById("checkuser").innerHTML =
            "ชื่อผู้ใช้สามารถใช้งานได้";
          document.getElementById("checkuser").style.color = "#93c47d";
        } else {
          document.getElementById("checkuser").innerHTML =
            "ชื่อผู้ใช้งานซ้ำคร๊าาา";
          document.getElementById("checkuser").style.color = "#e06666";
        }
      });
    } else {
      document.getElementById("checkuser").innerHTML = "";
    }
  }, [user]);
  return (
    <div class="bg-img container">
      <button
        type="button"
        id="btn-regis"
        class="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalToggle"
      >
        click
      </button>
      <DialogRegis/>
      <h1>สมัครสมาชิก</h1>
      <form onSubmit={submit}>
        <div class="form-group col-sm-4">
          <label for="username">Username</label>
          <br />
          <small id="checkuser"></small>
          <input
            type="text"
            class="form-control"
            id="username"
            aria-describedby="emailHelp"
            placeholder="username"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
              console.log(e.target.value.length);
            }}
          />
        </div>
        <div class="form-group col-sm-4">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div class="form-group col-sm-4">
          <label for="password">Confirm Password</label>
          <br />
          <small id="check"></small>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="confirm password"
            value={confirmPwd}
            onChange={(e) => {
              setConfirmpwd(e.target.value);
            }}
          />
        </div>
        <div class="form-group col-sm-4">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div class="form-group col-sm-4">
          <label for="telephone">Telephone</label>
          <input
            type="tel"
            class="form-control"
            id="telephone"
            placeholder="099-999-9999"
            value={tel}
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
        </div>

        <button id="btn-regis" type="submit" class="btn btn-primary">
          ยืนยัน
        </button>
      </form>
    </div>
  );
}
