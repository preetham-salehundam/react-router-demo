import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);

    }
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

export default Profile;