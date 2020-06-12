import React from 'react';
import './App.css';
//import Form from './components/FormContainer'
//import MemeGen from './components/MemeGenContainer'
import MemeGenerator from './components/MemeGenerator'
import Header from './components/Header'

function App(){
  return(
    <div>
      <Header />
      <MemeGenerator />
    </div>
  )
}

export default App;
