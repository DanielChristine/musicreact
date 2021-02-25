import React from 'react';
import axios from 'axios';

export default class Post extends React.Component {
    state = {
        data: [],
      }

  handleChange = event => {
    this.setState({ title: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      title: this.state.title,
    //   artist: this.state.artist,
    //   genre: this.state.genre,
    //   releasedate: this.state.releasedate,
    };

    axios.post(`http://www.devcodecampmusiclibrary.com/api/music`, { data })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            song title:
            <input type="text" title="title" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}