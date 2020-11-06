import axios from 'axios'

export const POST_PRICE_START = 'POST_PRICE_START'
export const POST_PRICE_SUCCESS = 'POST_PRICE_SUCCESS'
export const POST_PRICE_FAILURE = 'POST_PRICE_FAILURE'


export const getOptimalPrice = () => (dispatch) => {
  dispatch({ type: POST_PRICE_START })
  axios().post('https://nate-ds-bw.herokuapp.com/predict')
    .then(res => {
      // console.log(res)
      //dispatch({ type: POST_PRICE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      // console.log(err)
      //dispatch({ type: POST_PRICE_FAILURE, payload: err})
    })
}

