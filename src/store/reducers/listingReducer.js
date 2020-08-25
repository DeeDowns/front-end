import { POST_LISTING_START, POST_LISTING_SUCCESS, POST_LISTING_FAILURE } from '../actions/listingActions'

const initialState = {
    properties: [],
    isLoading: false,
    error: ''
}

export const listingReducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_LISTING_START:
            return {
                ...state, 
                isLoading: true,
                error: ''
            }
        case POST_LISTING_SUCCESS:
            return {
                ...state, 
                isLoading: false,
        }
        case POST_LISTING_FAILURE:
            return {
                ...state, 
                isLoading: false,
                error: action.payload
            }
        default: 
            return state
    }

}