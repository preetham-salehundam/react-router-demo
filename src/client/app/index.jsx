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
                <About>
                    <Route exact path="/about" component={Bio} />
                </About>

            </Switch>
        </main>);
    }
}


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={"persons":[]}
        this.populatePersonList= this.populatePersonList.bind(this);
    }
    componentDidMount(){
        fetch('stubs/persons.json').then((response)=>{
            return response.json();
        }).then((data)=>this.setState({"persons":data}));
    }
    populatePersonList(){
        return this.state.persons.map((person)=><li key={person.id}><Link to={`/about/${person.id}`}>{person.name}</Link></li>)
    }
    render() {
        return (<div><h1>Home</h1>
            <ul>{this.populatePersonList()}</ul>
        </div>)
    }
}
class Bio extends React.Component{
    constructor(props){
        super(props);
        this.state={"persons":[]}
        this.findPersonById = this.findPersonById.bind(this);
        this.personId = this.props.match.params.id;
    }
     componentDidMount(){
        fetch('/stubs/persons.json').then((response)=>{
            return response.json();
        }).then((data)=>this.setState({"persons":data}));
    }
    findPersonById(id){
        console.log(this.state.persons);
        let person=this.state.persons.filter((person)=>person.id==id);
        console.log(person);
        return <Profile {...person} />
    }
    render(){
        console.log(this.props.match.params);
        console.log(this.findPersonById(this.personId))
        return <div>{this.findPersonById(this.personId)}</div>
    }
}
class Profile extends React.Component {
    render() {
        return <div><h3>Profile</h3>
            <ul>
            <li>Name:{this.props.name}</li>
            <li>Age: {this.props.Age}</li>
            <li>Company: {this.props.Company}</li>
            <li>Job: {this.props.Job}</li>
            <li>Location: {this.props.Location}</li>
            <li>Phone number: {this.props.PhoneNumber}</li></ul></div>

    }
}
class About extends React.Component {
    render() {
        return (<div>
            <h1>About</h1>
            <Switch>
                <Route path="/about/:id" component={Bio}></Route>
            </Switch>
            {this.props.children}
        </div>)
    }
}
render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));