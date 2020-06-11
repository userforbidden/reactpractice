import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      loading: false,
      character: {},
      firstName:"",
      lastName:"",
      isFriendly:true,
      gender:"",
      favColor:"blue"
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event){
    const {name,value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]:checked}):this.setState({[name] : value})
  }
  componentDidMount(){
    this.setState({loading:true})

    fetch("https://swapi.dev/api/starships/3")
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
      <form onSubmit={this.handleSubmit}> 
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

        <br/>

        <textarea 
          value={"Some default Value"}
          onChange={this.handleChange}
        />

        <br/>

        <label>
          <input 
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          /> Is Friendly?
        </label>
        <br/>

        <label>
          <input 
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          /> Male
        </label>
        <br/>

        <label>
          <input 
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          /> Female
        </label>
        <br/>
        <label>Favorite Color:</label>

        <select
          value = {this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>

        </select>

        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your Favorite color is {this.state.favColor}</h2>
        <button>Submit</button>
      </form>
    );

  }
  
}

export default App;
