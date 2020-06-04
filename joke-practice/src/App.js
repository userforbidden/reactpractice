import React from 'react';
import './App.css';
import Joke from "./components/Joke"
import jokesData from "./data/jokesData"

function App() {
  const jokesComponents = jokesData.map(joke => {
    return (
      <Joke 
      key = {joke.id}
      line = {{question:joke.question,punch:joke.punchLine}}
      />
    )
  })

  const JokesData = jokesData.map(joke => <Joke key={joke.id} line = {{question:joke.question,punch:joke.punchLine}}/>)

  return (
    <div className="Joke-list">
      {jokesComponents}
      {JokesData}
    </div>
  );
}

export default App;
