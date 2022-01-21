import Header from "./Content/Header";
import Home from "./Content/Home";
import { Routes, Route, Link } from "react-router-dom";
import MovieTitle from "./Content/Movie/movieTitle";
import NavbarBottom from "./Content/NavbarBottom";
import Signin from "./Content/Register";
import { useCookies } from "react-cookie";
import Register from "./Content/Register";
import LoginModal from "./Component/LoginModal";
import LoginAdmin from "./Admin/LoginAdmin";
import HeaderAdmin from "./Admin/HeaderAdmin";
import React, { useState } from "react";

function App() {
  const [cookie, setCookie, removeCookie] = useCookies(["username"]);
  const [cookieAdmin, setCookieAdmin, removeCookieAdmin] = useCookies([
    "userAdmin",
  ]);
  

  // User cookies&&token

  const setToken = (token, username) => {
    setCookie("username", username, { path: "/" });
    setCookie("token", token, { path: "/" });
  };

  const removeToken = () => {
    removeCookie("username", { path: "/" });
    removeCookie("token", { path: "/" });
  };

  const isToken = () => {
    return cookie.username == undefined
      ? { isLogin: false }
      : { isLogin: true, username: cookie.username };
  };
  // Admin cookies&&token
  const setTokenAdmin = (token, username) => {
    setCookieAdmin("userAdmin", username, { path: "/admin" });
    setCookieAdmin("tokenAdmin", token, { path: "/admin" });
  };

  const removeTokenAdmin = () => {
    removeCookieAdmin("userAdmin", { path: "/admin" });
    removeCookieAdmin("tokenAdmin", { path: "/admin" });
  };

  const isTokenAdmin = () => {
    return cookieAdmin.userAdmin == undefined
      ? { isLogin: false }
      : { isLogin: true, username: cookieAdmin.userAdmin };
  };

  return (
    <div className="App">
      <Routes>
        <>
          <Route
            path="/admin"
            element={
              <>
                <LoginAdmin
                  setTokenAdmin={setTokenAdmin}
                  isTokenAdmin={isTokenAdmin}
                />
              </>
            }
          ></Route>
          <Route
            path="/admin/dashboard"
            element={
              <>
                <HeaderAdmin
                  isTokenAdmin={isTokenAdmin}
                  removeTokenAdmin={removeTokenAdmin}
                />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header
                  isToken={isToken}
                  removeToken={removeToken}
                  setToken={setToken}
                />
                <Home  />
                <NavbarBottom />
              </>
            }
          ></Route>

          <Route
            path="/movie/:movietitle"
            element={
              <>
                <Header
                  isToken={isToken}
                  removeToken={removeToken}
                  setToken={setToken}
                />
                <MovieTitle />
                <NavbarBottom />
              </>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <>
                <Header
                  isToken={isToken}
                  removeToken={removeToken}
                  setToken={setToken}
                />
                <Register />
                <NavbarBottom />
              </>
            }
          ></Route>
        </>
      </Routes>
      {/* <NavSide/> */}
    </div>
  );
}
export default App;
