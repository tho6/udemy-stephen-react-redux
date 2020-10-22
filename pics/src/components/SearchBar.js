import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }; // assigning an object
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    onFormSubmit = (event) => { // assigning an arrow function
        event.preventDefault(); // prevent the form/browser from trying to submit the form automatically
        
        // console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                        {/* <input type="text" onChange={this.onInputChange} /> */}
                        {/* <input type="text" onChange={(event) => console.log(event.target.value)} /> */}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;