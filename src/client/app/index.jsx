import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <Main />
               
            </div>
        );
    }
}

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));