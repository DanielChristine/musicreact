import React, { Component } from "react";
import "./App.css";
// import './Get';
import axios from "axios";
import Form from "./Table";

export default class App extends Component {
  state = {
    music: [],
  };
  componentDidMount() {
    axios.get(`http://localhost:5000/api/songs`).then((res) => {
      const music = res.data;
      this.setState({ music });
    });
  }


  handleChange = event => {
    this.setState({ song: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://localhost:5000/${this.state.song}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        
        <div>
        <table>
          <th>Title</th><th>Artist</th>
          {this.state.music.map((song) => (
            <tr>
              <td key="id">{song.title}</td>
              <td>{song.artist}</td>
            </tr>
          ))}
        </table>
        </div>

       <button onClick={Form}>Form</button>


      </div>
    )
  }
}

