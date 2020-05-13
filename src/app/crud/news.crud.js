import axios from "axios";

// const WiseBerryAPI = process.env.REACT_APP_WISEBERRY_API;
const WiseBerryAPI = 'http://127.0.0.1:8002/api';
export const LOGIN_URL = WiseBerryAPI + "/login";
export const REGISTER_URL = WiseBerryAPI + "/register";
export const REQUEST_PASSWORD_URL = WiseBerryAPI + "/forgot-password";
export const ME_URL = WiseBerryAPI + "/details";


export function getNewsData() {
    // Authorization head should be fulfilled in interceptor.
    return axios.get(WiseBerryAPI+"/news/topBigBorad");
}