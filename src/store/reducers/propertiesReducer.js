import { FETCH_PROPERTY_START, FETCH_PROPERTY_SUCCESS, FETCH_PROPERTY_FAILURE, FETCH_PROPERTY_ID_SUCCESS, POST_LISTING_SUCCESS } from '../actions/propertiesActions'

const initialState = {
    properties: [],
    property: {},
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
            case FETCH_PROPERTY_ID_SUCCESS :
                return {
                    ...state, 
                    isLoading: false,
                    property: action.payload
            }
            case FETCH_PROPERTY_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    properties: action.payload
                }

            case POST_LISTING_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    properties: [...state.properties, action.payload]
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