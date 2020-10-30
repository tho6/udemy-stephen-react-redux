import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'; // wire up Action Creator to Connect

class SongList extends Component {
    // console.log(this.props.songs)
    // this.props === {songs: state.songs} // how we use react-redux to get data from Redux Store into a component

    renderList() { // helper function
        return this.props.songs.map((song) => { // this return is to create a new array of JSX element, we want to return the array from the renderList method
            return ( // this return is to return JSX
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>Select</button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        });
    }

    render() {
        // console.log(this.props); // the connect will pass that selectSong Action creator, and pass it into our component as a prop to
        return <div className="ui divided list">{this.renderList()}</div>
    }
};

const mapStateToProps = (state) => { // get State from Store
    // console.log(state);
    // return state;

    return { songs: state.songs }
};

export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList); // pass the mapStateToProps() as first function so to get data from Provider