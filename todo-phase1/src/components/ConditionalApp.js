import React, {Component} from "react"
import Conditional from "./Conditional"

class ConditionalApp extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000)
    }

    render(){
        return(
            <div>
                {this.state.isLoading ? 
                <h1>Loading....</h1>:
                <Conditional/>}
            </div>
        )
    }
}

export default ConditionalApp