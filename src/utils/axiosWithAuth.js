import axios from 'axios'

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://airbnb-op-be.herokuapp.com',
        headers: {
            Authorization: localStorage.getItem('token')
            //or hard coded token 
        }
    })
}