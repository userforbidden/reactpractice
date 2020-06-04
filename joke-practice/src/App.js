import React from 'react';
import './App.css';
import Joke from "./components/Joke"

function App() {
  return (
    <div className="Joke-list">
      <Joke
      line = {{question:"This is Question 1 ",punch:"This is punch 1"}} 
      />
      <Joke
      line = {{punch:"This is punch 1"}} 
      />
      <Joke 
      line = {{question:"This is Question 2 ",punch:"This is punch 2"}} 
      />
      <Joke 
      line = {{question:"This is Question 3 ",punch:"This is punch 3"}} 
      />
      <Joke 
      line = {{question:"This is Question 4 ",punch:"This is punch 4"}} 
      />
      <Joke 
      line = {{question:"This is Question 5 ",punch:"This is punch 5"}} 
      />
    </div>
  );
}

export default App;
