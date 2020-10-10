import { briefPcListReducer } from './briefPcList'
import { detailedPcListReducer } from './detailedPcList'

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    briefPcList: briefPcListReducer,
    detailedPcList: detailedPcListReducer
})
