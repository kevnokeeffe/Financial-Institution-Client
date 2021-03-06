import store from '../store/index'
import { http } from "./HttpService";
import jwt from "jsonwebtoken";

export function isLoggedIn() {
  const token = localStorage.getItem("token");
  return token != null;
}

export function login(user) {
  return http()
    .post("api/user/login-refresh", user)
    .then(res => {
      if (res) {
        // eslint-disable-next-line no-console
        console.log(res.data.token)
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

export function getUserId() {
  const token = decodeToken();
  if (!token) {
    return null;
  }
  try {
    // eslint-disable-next-line no-console
    console.log(token.id);
    return token.id;
    
  } catch (error) {
    return null;
  }
}

export function getBankId() {
  const token = decodeToken();
  if (!token) {
    return null;
  }
  try {
    // eslint-disable-next-line no-console
    console.log(token.financialInstitutionID);
    return token.financialInstitutionID;
    
  } catch (error) {
    return null;
  }
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
