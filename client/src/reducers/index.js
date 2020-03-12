import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import loadingReducer from './loadingReducer'
import listReducer from './listReducer'

export default combineReducers({
  result: searchReducer,
  state: loadingReducer,
  list: listReducer
})