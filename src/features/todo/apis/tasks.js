import axios from "axios";

const url = process.env.REACT_APP_API
export const getAllTasks =  () => {
    return axios.get(url).then(res => {
        return res.data
    })
}
export const addNewTask = (id, task) => {
    // await new Promise(resolve => setTimeout(resolve, 5000))
    return axios.post(`${url}/${id}`, task)
}
export const createNewList = async () => {
    return axios.post(url).then( res => res.data)
}
export const updateListTitle = (id, data) => {
    return axios.put(`${url}/${id}`, data).then(res => res.data)
}