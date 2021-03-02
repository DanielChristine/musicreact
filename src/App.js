import React, { Component } from "react";
import "./App.css";
import "./Components/bootstrap.min.css";
import axios from "axios";
import NamesContainer from './NamesContainer';
// import Navbar from './Table.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      music: [],
      searchTerm: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.value.length < 2) {
      this.setState({ music: "not enough characters" });
    } else {
      this.setState({ music: "" });
    }
    const music = {
      music: this.state.title,
      music: this.state.artist,
    };

    axios.post(`https://localhost:5000/api/songs`, { music }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.music.filter(song => song.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  handleChange = (event) => {
    this.setState({ music: event.target.value });
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/api/songs`).then((res) => {
      const music = res.data;
      this.setState({ music });
    });
  }

  render() {
    return (
      <div>
        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Artist</th>
                <th scope="col">Genre</th>
                <th scope="col">Release</th>
                <th scope="col">Album</th>
              </tr>
            </thead>
            <tbody>
              {this.state.music.map((song) => (
                <tr className="table-success">
                  <td key="id">{song.title}</td>
                  <td>{song.artist}</td>
                  <td>{song.genre}</td>
                  <td>{song.releasedate}</td>
                  <td>{song.album}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <form className="formForPage" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="artist">Artist: </label>
            <input
              name="artist"
              placeholder="Artist"
              value={this.state.artist}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="album">Album</label>
            <input
              name="album"
              placeholder="Album"
              value={this.state.album}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="genre">Genre: </label>
            <input
              name="genre"
              placeholder="What kinda music?"
              value={this.state.genre}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="releasedate">Release Date: </label>
            <input
              name="releasedate"
              placeholder="What year was it born?"
              value={this.state.releasedate}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-info"
              onClick={this.getSpecficMusic}
            >
              Action
            </button>
          </div>
        </form>
        {/* <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
          <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search By Title!'/>
          <br></br>
          <h3>Search By Title:</h3>
          <NamesContainer music = {this.dynamicSearch()}/>
        </div> */}
      </div>
    );
  }
}
