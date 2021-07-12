import { createStore, combineReducers } from 'redux'
import movieReducer from './reducers'

const rootReducer = combineReducers({
    movies: movieReducer,
})


const configureStore = createStore(rootReducer, {})

export default configureStore;
