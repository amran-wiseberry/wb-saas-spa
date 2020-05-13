import axios from "axios";

// const WiseBerryAPI = process.env.REACT_APP_WISEBERRY_API;
const WiseBerryAPI = 'http://127.0.0.1:8002/api';
 console.log("Link"+WiseBerryAPI);
export const LOGIN_URL = WiseBerryAPI + "/login";
export const REGISTER_URL = WiseBerryAPI + "/register";
export const REQUEST_PASSWORD_URL = WiseBerryAPI + "/forgot-password";
export const ME_URL = WiseBerryAPI + "/details";

export function login(logon, password) {
  console.log(logon+''+LOGIN_URL);
    return axios.post(LOGIN_URL, { logon, password });
}

export function register(username, fullname, password) {
    return axios.post(REGISTER_URL, { username, fullname, password });
}

export function requestPassword(username) {
    return axios.post(REQUEST_PASSWORD_URL, { username });
}

export function getUserByToken() {
    // Authorization head should be fulfilled in interceptor.
    return axios.get(ME_URL);
}