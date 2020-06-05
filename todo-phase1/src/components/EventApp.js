import React, { Component } from "react"

class EventApp extends Component{
    render(){
        return (
            <div>
                <img src="https://www.fillmurray.com/200/100"/>
                <br/>
                <br/>
                <button onClick={() => console.log("I am clicked") }>Click Me</button>
            </div>
        )
    }
}
export default EventApp