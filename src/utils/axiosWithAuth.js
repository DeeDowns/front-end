import axios from 'axios'

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://airbnb-be-1.herokuapp.com',
        headers: {
            Authorization: localStorage.getItem('token')
            //or hard coded token 
        }
    })
}