import React, { Component } from 'react'

class Name extends Component {
    render() {
        return (
            <div>
                {this.props.song}
            </div>
        )
    }
}

export default Name
