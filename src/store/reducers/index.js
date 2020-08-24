//reducer index

import { combineReducers } from 'redux'
import {propertiesReducer} from './propertiesReducers'

export const rootReducer = combineReducers({
    propertiesReducer
})