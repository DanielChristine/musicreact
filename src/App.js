import React, { Component } from "react";
import "./App.css";
// import './Get';
import axios from "axios";
import DynamicTable from "./Table";

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

  render() {
    return (
      <div className="App">
        <table>
          {this.state.music.map((song) => (
            <tr>
              <td>{song.title}</td>
              <td>{song.artist}</td>
            </tr>
          ))}
        </table>

        <button onClick={DynamicTable}>Make a get</button>
      </div>
    );
  }
}
