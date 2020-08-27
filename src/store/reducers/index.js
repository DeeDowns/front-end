//reducer index

import { combineReducers } from 'redux'
import {propertiesReducer} from './propertiesReducer'
import { optimalPriceReducer } from './optimalPriceReducer'

export const rootReducer = combineReducers({
    propertiesReducer, 
    optimalPriceReducer
})