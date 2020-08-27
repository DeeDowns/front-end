import { POST_PRICE_START, POST_PRICE_SUCCESS, POST_PRICE_FAILURE } from '../actions/optimalPriceActions'

const initialState = {
    predictedPrice: '',
    isLoading: false,
    error: ''
}

export const optimalPriceReducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_PRICE_START:
            return {
                ...state, 
                isLoading: true,
                error: ''
            }
        case POST_PRICE_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                predictedPrice: action.payload
        }
        case POST_PRICE_FAILURE:
            return {
                ...state, 
                isLoading: false,
                error: action.payload
            }
        default: 
            return state
    }

}