import React from "react";

function Product(props){
    console.log(props);
    return(
        <div className="product-item">
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US",{style:"currency", currency:"USD"})}
             - {props.product.description}</p>
            <hr/>
    </div>
    )
    
}

export default Product;