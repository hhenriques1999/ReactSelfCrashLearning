import React from 'react';

class MyClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        console.log("Component has mounted");
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    };

    render() {
        return (
            <div>
                <h1>Hello from a class based Component</h1>
                <p>Count {this.state.count}</p>
                <button onClick={this.handleIncrement}>Increment Counter</button>
            </div>
        );
    }

}

export default MyClassComponent;