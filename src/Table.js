import React,{ Component } from 'react'
  
class Form extends Component{ 
  constructor(props){ 
    super(props) 
    this.state = { title:'',artist:'', album:null, genre:'',releasedate:''} 
    this.handleChange = this.handleChange.bind(this) 
    this.handleSubmit = this.handleSubmit.bind(this) 
  } 

  handleSubmit(event){ 
    const { title, artist, album, genre, releasedate } = this.state 
    event.preventDefault() 
    alert(` 
      ____Your Details____\n 
      Title : ${title} 
      artist : ${artist} 
      album : ${album} 
      genre : ${genre} 
      releasedate : ${releasedate} 
    `) 
  } 
  
  handleChange(event){ 
    this.setState({ [event.target.music] : event.target.value 
    }) 
  } 
  
  render(){ 
    return( 
      <form onSubmit={this.handleSubmit}> 
        <div> 
          <label htmlFor='title'>title</label> 
          <input  
            name='title'
            placeholder='title' 
            value = {this.state.title} 
            onChange={this.handleChange} 
          /> 
        </div> 
        <div> 
          <label htmlFor='artist'>artist</label> 
          <input 
            name='artist' 
            placeholder='Artist'
            value={this.state.artist} 
            onChange={this.handleChange} 
          /> 
        </div> 
        <div> 
          <label htmlFor='album'>Album</label> 
          <input 
            name='album' 
            placeholder='Album'
            value={this.state.album} 
            onChange={this.handleChange} 
          /> 
        </div> 
        <div> 
          <label htmlFor='genre'>Genre</label> 
          <input 
            name='genre' 
            placeholder='genre'
            value={this.state.genre} 
            onChange={this.handleChange} 
          /> 
        </div> 
        <div> 
          <label htmlFor='releasedate'>Release Date</label> 
          <input 
            name='releasedate' 
            placeholder='releasedate'
            value={this.state.releasedate} 
            onChange={this.handleChange} 
          /> 
        </div> 
        <div> 
          <button>Action</button> 
        </div> 
      </form> 
    ) 
  } 
} 
  
export default Form