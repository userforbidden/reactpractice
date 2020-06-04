import React from 'react';
import './App.css';
import Product from "./components/Product"
import productsData from "./data/vschoolProducts"

function App() {
  const productComponents = productsData.map(item => {
    return (
      <Product 
      key = {item.id}
      product = {item}
      />
    )
  })

  // const JokesData = jokesData.map(joke => <Joke key={joke.id} line = {{question:joke.question,punch:joke.punchLine}}/>)

  return (
    <div className="product-list">
      {productComponents}
    </div>
  );
}

export default App;
