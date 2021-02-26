// import React from 'react';
// import axios from 'axios';

// export default class Post extends React.Component {
//     state = {
//         title: '',
//         artist: '',
//         album: '',
//         genre: '',
//         releasedate: '',
//       }

//   handleChange = event => {
//     this.setState({ title: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     const music = {
//       title: this.state.title,
//       artist: this.state.artist,
//       album:  this.state.album,
//       genre: this.state.genre,
//       releasedate: this.state.releasedate
//     };

//     axios.post(`http://localhost:5000/api/songs`, { music })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             song title:
//             <input type="text" title="title" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     )
//   }
// }