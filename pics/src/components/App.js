import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// const App = () => { // refactor to class component for child to communicate with parent
class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => { // marked as async solution 2
        // console.log(term);
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        })
        // }).then((response) => { // solution 1
        //     console.log(response.data.results);
        // });

        this.setState({ images: response.data.results });
        // console.log(response.data.results);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                {/* Found {this.state.images.length} image */}
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;