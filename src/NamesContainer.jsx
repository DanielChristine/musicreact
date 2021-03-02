import React, { Component } from 'react';
import Name from './Name.jsx';

class NamesContainer extends Component {
    render() {
        return (
            <div>
                {this.props.music.map((song) => <Name song = {song}/>)}
            </div>
        )
    }
}

export default NamesContainer
