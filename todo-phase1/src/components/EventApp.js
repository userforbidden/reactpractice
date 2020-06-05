import React, { Component } from "react"

function handleClick(){
    console.log("Button was clicked")
}

function handleMouseOver(){
    console.log("Mouse is over image")
}

class EventApp extends Component{
    
    render(){
        return (
            <div>
                <img src="https://www.fillmurray.com/200/100" onMouseOver={handleMouseOver}/>
                <br/>
                <br/>
                <button onClick={handleClick}>Click Me</button>
            </div>
        )
    }
}
export default EventApp