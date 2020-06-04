import React from "react";

function Joke(props){
    return (
        <div className="joke-item">
            <h3 style={{display: !props.line.question && "none"}}>Question: {props.line.question}</h3>
            <h3 style={{color: !props.line.question && "grey"}}>Answer: {props.line.punch}</h3>
            <hr/>
        </div>
    )
}
export default Joke;