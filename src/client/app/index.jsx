import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                 {/*<Header />*/}
                <Main />
            </div>


        );
    }
}
class Main extends React.Component{
    render(){
        return(<main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </main>);
    }
}

class Home extends React.Component{
    render(){
        return <h1>Home</h1>
    }
}
class About extends React.Component{
    render(){
        return <h1>About</h1>
    }
}
render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));