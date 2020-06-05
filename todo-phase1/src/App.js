import React from 'react';
import './App.css';
//import TodoHeader from './components/TodoHeader'

// function App() {
//   return (
//     <div>
//       <TodoHeader />    
//     </div>
//   );
// }

class App extends React.Component{
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
}

export default App;
