import React from 'react';
import {Switch,Route} from 'react-router-dom';
import About from './About.jsx';
import Bio from './Bio.jsx';
import Home from './Home.jsx'
class Main extends React.Component {
    render() {
        return (<main>
            <Switch>
                <Route exact path="/" component={Home} />
                <About>
                    <Route exact path="/about" render={()=><h1>No data to display</h1>} />
                    <Route path="/about/:id" component={Bio} />
                </About>

            </Switch>
        </main>);
    }
}
export default Main;