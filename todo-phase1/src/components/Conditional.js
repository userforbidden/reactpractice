import React from "react"

function Conditional(props){
    let buttonValue = !props.loggedState ? "Login" : "Logout"

    return(
    <input type="button" value={buttonValue}></input>
    )
    
}

export default Conditional