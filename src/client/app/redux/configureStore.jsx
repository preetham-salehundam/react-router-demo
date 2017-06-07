import { initialState , rootReducer } from './reducers.jsx';
import { createStore } from 'redux';

const configureStore = () => {
    const store = createStore(
        rootReducer,
        initialState
    );
    return store
}
export default configureStore;