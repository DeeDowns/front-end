import { FETCH_LISTING_START, FETCH_LISTING_SUCCESS, FETCH_LISTING_FAILURE } from '../actions/listingActions'

const initialState = {
    listing: {},
    isLoading: false,
    error: ''
}

export const listingReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LISTING_START:
            return {
                ...state, 
                isLoading: true,
                error: ''
            }
        case FETCH_LISTING_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                listing: action.payload
        }
        case FETCH_LISTING_FAILURE:
            return {
                ...state, 
                isLoading: false,
                error: action.payload
            }
        default: 
            return state
    }

}