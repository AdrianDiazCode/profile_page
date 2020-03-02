import {createStore, combineReducers} from 'redux'
import globals_reducer from './reducers/globals_reducer'
var main_reducer = combineReducers({
    globals_reducer,
});

var store = createStore(main_reducer)
export default store;