import axios from "axios";

const url = process.env.REACT_APP_API

export const signupApi = (user) => {
    return axios.post(`${url}/users/signup`, user).then(res => res.data)
}
export const signinApi = (user) => {
    return axios.post(`${url}/users/login`, user).then(res => res.data)
}
