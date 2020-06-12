import React, { Component } from "react";
class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    componentDidMount(){
        console.log("I did mount")
    }
    render(){
        return(
            <h1>MEME GENERATOR SECTION</h1>
        )
    }
}
export default MemeGenerator