import axios from "axios";

const url = process.env.REACT_APP_API
console.log(url, "+====== url")
export const getAllTasks = () => {
    return axios.get(url).then(res => res.data)
}
export const addNewTask = (task) => {
    console.log(task, "got here");
    return axios.post(url, task)
}