import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

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

class Header extends React.Component {
    render() {
        return (<header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>);
    }
}
class Main extends React.Component {
    render() {
        return (<main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Bio>
                    <Route path="/about" component={About} />
                </Bio>

            </Switch>
        </main>);
    }
}


class Home extends React.Component {
    render() {
        return (<div><h1>Home</h1>
            <div>This is a home page</div>
        </div>)
    }
}
class About extends React.Component {
    render() {
        return <ul><li>Name: Preetham</li>
            <li>Age: 26</li>
            <li>Company: Capgemini</li>
            <li>Job: Developer</li>
            <li>Location: Chennai</li>
            <li>Phone number: +918828221993</li></ul>

    }
}
class Bio extends React.Component {
    render() {
        return (<div>
            <h1>About Me</h1>
            {this.props.children}
        </div>)
    }
}
render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));