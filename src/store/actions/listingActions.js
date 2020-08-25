import {axiosWithAuth} from '../../utils/axiosWithAuth'

export const FETCH_LISTING_START = 'FETCH_LISTING_START'
export const FETCH_LISTING_SUCCESS = 'FETCH_LISTING_SUCCESS'
export const FETCH_LISTING_FAILURE = 'FETCH_LISTING_FAILURE'

export const fetchListing = (id) => (dispatch) => {
    dispatch({ type: FETCH_LISTING_START })
    axiosWithAuth().get(`api/listing/${id}`)
    .then(res => {
        console.log(res)
        //dispatch({ type: FETCH_LISTING_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
         //dispatch({ type: FETCH_LISTING_FAILURE, payload: err})
    })
}