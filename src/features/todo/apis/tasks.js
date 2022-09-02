import axios from "axios";

const url = `${process.env.REACT_APP_API}/lists`
export const getAllTasks =  (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return axios.get(url, config).then(res => {
        return res.data
    })
}
export const addNewTask = (id, task, token) => {
    // await new Promise(resolve => setTimeout(resolve, 5000))
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return axios.post(`${url}/${id}`, task, config)
}
export const createNewList = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return axios.post(url, null, config).then( res => res.data)
}
export const updateListTitle = (id, data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return axios.put(`${url}/${id}`, data, config).then(res => res.data)
}