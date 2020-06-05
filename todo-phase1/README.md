25. Class based Components Practice 

Challenge: 
1. Convert all 3 components to be class-based 
2. Fix the small bug 

import React from "react"
import ReactDom from "react-dom"

// #1
function App(){
    return(
        <div>
            <Header />
            <Greeting />
        </div>
    )
}

#2 
function Header(props){
    return(
        <header>
            <p>Welcome, {props.username}!</p>
        </header>
    )
}

#3 
function Greeting(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
}

26. State
Some information on Classes https://scrimba.com/p/p4Mrt9/cQnMDHD
