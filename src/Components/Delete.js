// import React from 'react';
// import axios from 'axios';

// export default class PersonList extends React.Component {
//     state = {
//         title: '',
//         artist: '',
//         album: '',
//         genre: '',
//         releasedate: '',
//       }

//   handleChange = event => {
//     this.setState({ id: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     axios.delete(`http://localhost:5000/api/songs/${this.state.id}`)
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
//             Song Id:
//             <input type="text" name="id" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Delete</button>
//         </form>
//       </div>
//     )
//   }
// }