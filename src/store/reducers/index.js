//reducer index

import { combineReducers } from 'redux'
import {propertiesReducer} from './propertiesReducer'
import { listingReducer } from './listingReducer'

export const rootReducer = combineReducers({
    propertiesReducer, 
    listingReducer
})