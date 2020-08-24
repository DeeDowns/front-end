import {axiosWithAuth}  from '../../utils/axiosWithAuth'

export const FETCH_PROPERTY_START = 'FETCH_PROPERTY_START'
export const FETCH_PROPERTY_SUCCESS = 'FETCH_PROPERTY_SUCCESS'
export const FETCH_PROPERTY_FAILURE = 'FETCH_PROPERTY_FAILURE'
export const fetchProperty = () => (dispatch) => {
    dispatch({ type: FETCH_PROPERTY_START })
   axiosWithAuth().get('')
    .then(res => {
        console.log(res)
        // dispatch({ type: FETCH_PROPERTY_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        // dispatch({ type: FETCH_PROPERTY_FAILURE, payload: err })
    })
}

