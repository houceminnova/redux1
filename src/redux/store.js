import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'; //thunk ma ikhali l action tekmel ken ma state taabet (maaneha jet response)
import {ServicesReducer} from './reducer.js'
const all = combineReducers({
    userStore:ServicesReducer
})

const store = createStore(all,applyMiddleware(thunk))

export default store