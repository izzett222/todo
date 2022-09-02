import axios from "axios";

const url = process.env.REACT_APP_API

export const signupApi = (user) => {
    return axios.post(`${url}/users/signup`, user).then(res => res.data)
}