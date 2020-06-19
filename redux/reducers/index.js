import { combineReducers } from 'redux'
import boxShadowReducer  from './boxShadowReducer'

const rootReducer = combineReducers({ boxShadow: boxShadowReducer })

export default rootReducer