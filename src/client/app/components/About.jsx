import React from 'react';


class About extends React.Component {
    render() {
        return (<div>
            <h1>About</h1>
            {this.props.children}
        </div>)
    }
}

export default About;