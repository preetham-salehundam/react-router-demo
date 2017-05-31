import React from 'react';
import {render} from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<h1>Hi</h1>);
    }
}

render(<App />,document.getElementById('app'));