import React from 'react';
import Profile from './Profile.jsx'
class Bio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "persons": [] }
        this.findPersonById = this.findPersonById.bind(this);
        this.personId = this.props.match.params.id;
    }
    componentDidMount() {
        fetch('/stubs/persons.json').then((response) => {
            return response.json();
        }).then((data) => this.setState({ "persons": data }));
    }
    findPersonById(id) {

        let person = this.state.persons.filter((person) => person.id == id);

        return <Profile {...person[0]} />
    }
    render() {

        return <div>{this.findPersonById(this.personId)}</div>
    }
}

export default Bio;