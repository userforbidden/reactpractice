import React, { Component } from "react"
//import Conditional from "./Conditional"

class ConditionalPractice extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn : false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState =>{
            return{
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render(){
        return (
            <div>
                <h2>User {this.state.isLoggedIn ? "Logged In" : "Logged Out"}</h2>
                <button onClick={this.handleClick}>{!this.state.isLoggedIn?"Login":"Logout"}</button>
            </div>
        )
    }
}
export default ConditionalPractice