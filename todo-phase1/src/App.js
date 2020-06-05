import React, { Component } from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader'
//import TodoItem from './components/TodoItem'

/* class App extends Component{
  constructor(){
    super()
    this.state = {
      isLoggedIn: false
    }
  }
  render (){
    return (
      <div>
        <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
      </div>
    )
  }
} */
/* class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Saranyan",
      age : 28
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    )
  }
} */
/* class App extends React.Component{
  constructor(){
    super()
    this.state ={
      answer: "Yes"
    }
  }
  render() {
    return(
      <div>
        <h1>Is state important to know? {this.state.answer}</h1>
        <TodoItem item={{text: this.state.answer,completed:false}}/>
      </div>
    )
  }
} */
function App() {
  return (
    <div>
      <TodoHeader />    
    </div>
  );
}

/* class App extends React.Component{
  render() {
    return(
      <div>
          <Header username="Saranyan"/>
          <Greeting />
      </div>
    )
  }
}


class Header extends React.Component{
  render(){
    return(
      <header>
          <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}


class Greeting extends React.Component{
  render(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: 20
    }
    if (hours < 12){
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17){
        timeOfDay = 'afternoon'
        styles.color = "purple"
    } else{
        timeOfDay = 'night'
        styles.color = "grey";
    }

    return(
      <h2 style={styles}>Good {timeOfDay} to you, sir or madam</h2>
    )
  }
} */

export default App;
