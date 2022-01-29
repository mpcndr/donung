import axios from "axios";
import { useCookies } from "react-cookie";
import def from "../Def";

export let apiGet = function (path) {
  return new Promise((resolve, reject) => {
    axios
      .get(def.apiURL + path)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export let apiPost = function (path, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(def.apiURL + path, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export let userAuthGet = function (path, token) {
  return new Promise((resolve, reject) => {
    axios
      .get(def.apiURL + path, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export let userAuthPost = function (path, data, token) {
  return new Promise((resolve, reject) => {
    axios
      .post(def.apiURL + path, data, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export let adminAuthGet = function (path, token) {
  return new Promise((resolve, reject) => {
    axios
      .get(def.apiURL + path, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export let adminAuthPost = function (path, data, token) {
  return new Promise((resolve, reject) => {
    axios
      .post(def.apiURL + path, data, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export let adminAuthDel = function (path, data, token) {
  return new Promise((resolve, reject) => {
    let config = {
      data: data,
      headers: {
        Authorization: token,
      },
    };
    axios
      .delete(def.apiURL + path, config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
