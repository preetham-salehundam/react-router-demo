import React from 'react';
import { render } from 'react-dom';
import Routes from './components/Routes.jsx'
import configureStore from './redux/configureStore.jsx'
import {Provider} from 'react-redux'

const store  = configureStore();
render(<Provider store={store}><Routes /></Provider>, document.getElementById('root'));