import { axiosWithAuth } from '../../utils/axiosWithAuth'

export const POST_LISTING_START = 'POST_LISTING_START'
export const POST_LISTING_SUCCESS = 'POST_LISTING_SUCCESS'
export const POST_LISTING_FAILURE = 'POST_LISTING_FAILURE'


export const addListing = (newListing) => (dispatch) => {
  dispatch({ type: POST_LISTING_START })
  axiosWithAuth().get(`api/listing/`, newListing)
    .then(res => {
      console.log(res)
      //dispatch({ type: POST_LISTING_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      //dispatch({ type: POST_LISTING_FAILURE, payload: err})
    })
}

