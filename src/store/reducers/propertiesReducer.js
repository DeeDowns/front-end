import { FETCH_PROPERTY_START, FETCH_PROPERTY_SUCCESS, FETCH_PROPERTY_FAILURE } from '../actions/propertiesActions'

const initialState = {
    properties: [],
    isLoading: false,
    error: ''
}

export const propertiesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PROPERTY_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
            case FETCH_PROPERTY_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    properties: action.payload
                }
            case FETCH_PROPERTY_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload
                }
        default: 
            return state
    }
    
}