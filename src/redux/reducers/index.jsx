import { briefProductsListReducer } from './briefProductsList'
import { detailedProductsListReducer } from './detailedProductsList'
import { basketReducer } from './basket'

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    briefProductsList: briefProductsListReducer,
    detailedProductsList: detailedProductsListReducer,
    basketList: basketReducer
})
