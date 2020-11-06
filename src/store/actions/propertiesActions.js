import { axiosWithAuth } from '../../utils/axiosWithAuth'

export const FETCH_PROPERTY_START = 'FETCH_PROPERTY_START'
export const FETCH_PROPERTY_SUCCESS = 'FETCH_PROPERTY_SUCCESS'
export const FETCH_PROPERTY_FAILURE = 'FETCH_PROPERTY_FAILURE'
export const FETCH_PROPERTY_ID_SUCCESS = 'FETCH_PROPERTY_ID_SUCCESS'
export const POST_LISTING_SUCCESS = 'POST_LISTING_SUCCESS'

export const fetchProperties = () => (dispatch) => {
  dispatch({ type: FETCH_PROPERTY_START })
  axiosWithAuth().get('/api/properties')
    .then(res => {
      // console.log('propertiesActions', res.data.properties)
      dispatch({ type: FETCH_PROPERTY_SUCCESS, payload: res.data.properties})
    })
    .catch(err => {
      // console.log(err)
      dispatch({ type: FETCH_PROPERTY_FAILURE, payload: err })
    })
}

export const fetchPropertyById = (id) => (dispatch) => {
  console.log('fired')
  dispatch({ type: FETCH_PROPERTY_START })
  axiosWithAuth().get(`/api/properties/${id}`)
    .then(res => {
      // console.log('propertiesActions', res.data.properties)
      dispatch({ type: FETCH_PROPERTY_ID_SUCCESS, payload: res.data})
    })
    .catch(err => {
      // console.log(err)
      dispatch({ type: FETCH_PROPERTY_FAILURE, payload: err })
    })
}


export const addListing = (newListing) => (dispatch) => {
  dispatch({ type: FETCH_PROPERTY_START })
  axiosWithAuth().post('/api/properties/', newListing)
    .then(res => {
      // console.log(res)
      dispatch({ type: POST_LISTING_SUCCESS, payload: res.data.properties })
      window.location.reload(true)
    })
    .catch(err => {
      // console.log(err)
      dispatch({ type: FETCH_PROPERTY_FAILURE, payload: err})
    })
}