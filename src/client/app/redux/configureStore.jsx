import {createStore} from 'redux'
import {rootReducer , initialState} from './reducers.jsx'

const configureStore = () => {
    const store = createStore();
    return store
}
export default configureStore;