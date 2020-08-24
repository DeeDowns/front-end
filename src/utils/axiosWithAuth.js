import axios from 'axios'

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'http://localhost:4000' ,
        headers: {
            Authoritzation: localStorage.getItem('token')
            //or hard coded token 
        }
    })
}