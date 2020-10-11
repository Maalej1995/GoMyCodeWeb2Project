import { briefProductsListReducer } from './briefProductsList'
import { detailedProductsListReducer } from './detailedProductsList'

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    briefProductsList: briefProductsListReducer,
    detailedProductsList: detailedProductsListReducer
})
