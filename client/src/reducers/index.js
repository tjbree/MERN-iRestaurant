import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import loadingReducer from './loadingReducer'
import listReducer from './listReducer'
import authReducer from './authReducer'
import errorReducer from './errorReducer'

export default combineReducers({
  result: searchReducer,
  state: loadingReducer,
  list: listReducer,
  auth: authReducer,
  error: errorReducer
})