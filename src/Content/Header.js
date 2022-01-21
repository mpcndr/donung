import { Link } from "react-router-dom";
import "./header.css";
import LoginModal from "../Component/LoginModal";
import { useState } from "react";

export default function Header({ isToken, removeToken, setToken }) {
  let [search, setSearch] = useState([""]);
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-none d-md-block">
            <li class="nav-item dropdown">
              <a
                class="nav-link navbar-brand"
                href=""
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-list"></i>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    ประเภท
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  หน้าแรก
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/series">
                  ซีรี่ย์
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/movies">
                  ภาพยนต์
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/kids">
                  Kids
                </Link>
              </li>
            </ul>
            <form class="d-flex" id="form-search">
              <input
                class="form-control"
                id="input-search"
                type="text"
                placeholder="ค้นหา"
                aria-label="Search"
                value={search}
                onChange={(k) => {
                  setSearch(k.target.value)
                }}
              ></input>
              <button class="btn" id="button-search">
                <i class="bi bi-search"></i>
              </button>
            </form>

            {isToken().isLogin == true ? (
              <>
                <div class="btn-group">
                  <div
                    class="btn-sm"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={require("../image/user.png").default}
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                    ></img>
                  </div>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        รายการรับชม
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        บัญชีของฉัน
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="/"
                        onClick={() => {
                          removeToken();
                          window.location.reload();
                        }}
                      >
                        ออกจากระบบ
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <button type="button" class="btn btn-primary " id="btn-sign">
                  <a id="signin" href="/register">
                    สมัครสมาชิก
                  </a>
                </button>
                <ul class="navbar-nav mb-2 mb-lg-0" id="ul-login">
                  <li class="nav-item">
                    <a
                      id="login"
                      class="nav-link"
                      href=""
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      เข้าสู่ระบบ
                    </a>
                  </li>
                </ul>
                <LoginModal setToken={setToken} />
              </>
            )}
          </div>
          <button
            type="button "
            class="btn btn-primary d-block d-md-none"
            id="btn-sign"
          >
            <a id="signin" href="/register">
              สมัครสมาชิก
            </a>
          </button>
          <button class="btn d-block d-md-none" id="button-search-ph">
            <i class="bi bi-search"></i>
          </button>
        </div>
      </nav>
    </div>
  );
}
