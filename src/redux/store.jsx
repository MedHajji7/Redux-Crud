import { legacy_createStore } from 'redux'
import counterReducer from './reducer'

const store = legacy_createStore(counterReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// ila kano reducers bzzf :  createStore =(combineReducers(reducer1 ,reducer2 ...)) 
export default store