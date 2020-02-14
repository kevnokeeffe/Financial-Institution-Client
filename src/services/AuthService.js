import store from '../store/index'
import { http } from "./HttpService";
import jwt from "jsonwebtoken";

export function isLoggedIn() {
  const token = localStorage.getItem("token");
  return token != null;
}

export function login(user) {
  return http()
    .post("api/user/login-access", user)
    .then(res => {
      if (res) {
        setToken(res.data.token);
      }
    }).catch(err => {
      if (err) {
        return 
      }
      return
    })
}

export function logout() {
  localStorage.clear();
  store.dispatch("authenticate");
}

function setToken(token) {
  localStorage.setItem("token", token);
  store.dispatch("authenticate");
}

export function getToken() {
  return localStorage.getItem("token");
}

export function registerUser(user) {
  return http().post("api/user/register", user);
}

export function checkUser(user) {
  return http().get("api/user/get", user);
}

export function decodeToken() {
  const token = getToken();
  if (!token) {
    return null;
  }
  return jwt.decode(token);
}
