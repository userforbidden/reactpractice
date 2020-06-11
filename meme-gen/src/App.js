import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      loading: false,
      character: {},
      firstName:"",
      lastName:""
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event){
    const {name,value} = event.target
    this.setState({
      [name] : value
    })
  }
  componentDidMount(){
    this.setState({loading:true})

    fetch("https://swapi.dev/api/starships/5")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        })
      })
  }
  render(){
    const text = this.state.loading ? "loading..." : this.state.character.name
    return (
      <div>
        <p>{text}</p>
        <input 
          type="text" 
          name="firstName" 
          value ={this.state.firstName}
          placeholder="First Name" 
          onChange={this.handleChange}
        />
        <br/>
        <input 
          type="text" 
          name="lastName" 
          value={this.state.lastName}
          placeholder="Last Name" 
          onChange={this.handleChange}
        />
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </div>
    );

  }
  
}

export default App;
