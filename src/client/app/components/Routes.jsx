import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import App from './App.jsx'
class Routes extends React.Component{

render(){
    return(<BrowserRouter><App /></BrowserRouter>)
}
}

export default Routes