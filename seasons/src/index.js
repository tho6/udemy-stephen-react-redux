import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// FUNCTIONAL COMPONENT
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position), // first callback
//         err => console.log(err) // second callback for for err
//     );

//     return <div>Latitude: </div>;
// };

// CLASS COMPONENT
class App extends React.Component {
    constructor(props) {
        super(props);

        // this is the only time we do direct assignment to this.state
        this.state = { lat: null, errorMessage: '' }; // {} is state object; initial lat as null

        // window.navigator.geolocation.getCurrentPosition(
        //     // (position) => console.log(position), // first callback
        //     // err => console.log(err) // second callback for for err
        //     position => {
        //         this.setState({ lat: position.coords.latitude }); // we called setState
        //     },
        //     err => {
        //         this.setState({ errorMessage: err.message });
        //     }
        // );
    }

    state = { lat: null, errorMessage: '' }; // refactor to the this.state above

    // LIFECYCLE METHODS
    componentDidMount() {
        // console.log('Component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            // (position) => console.log(position), // first callback
            // err => console.log(err) // second callback for for err
            position => this.setState({ lat: position.coords.latitude }), // we called setState
            err => this.setState({ errorMessage: err.message }));
    }

    componentDidUpdate() {
        console.log('Component was just updated - it re-rendered');
    }

    render() { // React says we have to define render
        // return (
        //     <div>
        //         Latitude: {this.state.lat}
        //         <br />
        //         Error: {this.state.errorMessage}
        //     </div>
        // );

        // CONDITIONAL RENDING
        if (this.state.errorMessage && !this.state.lat) { // if we have errorMessage && do not have a latitude
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            // return <div>Latitude: {this.state.lat}</div>
            return <SeasonDisplay lat={this.state.lat} /> // take property from the state and pass it as a prop down into the SeasonDisplay
        }

        return <div>Loading!</div> // if we failed the 2 above, we have neither latitude nor error message, so show direct the return <div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));