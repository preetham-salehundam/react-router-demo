import React from 'react';
import {Link} from 'react-router-dom';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "persons": [] }
        this.populatePersonList = this.populatePersonList.bind(this);
    }
    componentDidMount() {
        fetch('stubs/persons.json').then((response) => {
            return response.json();
        }).then((data) => this.setState({ "persons": data }));
    }
    populatePersonList() {
        return this.state.persons.map((person) => <li key={person.id}><Link to={`/about/${person.id}`}>{person.name}</Link></li>)
    }
    render() {
        return (<div><h1>Home</h1>
            <ul>{this.populatePersonList()}</ul>
        </div>)
    }
}

export default Home;