import axios from 'axios'

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: /*base url goes here*/ 'http:something' ,
        headers: {
            Authoritzation: localStorage.getItem('token')
            //or hard coded token 
        }
    })
}