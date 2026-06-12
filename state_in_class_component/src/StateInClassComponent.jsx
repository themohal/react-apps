import {Component} from 'react';
class StateInClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Farjad"
        };
    }

    updateState = () => {
        console.log("State updated!");
        this.setState({ name: "Farjad Ali" });
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                <h1>Hello, {name}!</h1>
                <button onClick={this.updateState}>Update State</button>
            </div>
        );  
    }
}
export default StateInClassComponent;