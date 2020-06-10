import React, {Component} from "react"
import Conditional from "./Conditional"

class ConditionalApp extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: true,
            unreadMessages:["a","b"]
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
                {this.state.unreadMessages.length > 0 && 
                <h2>You have {this.state.unreadMessages.length} unread messages</h2>
                //<Conditional/>
                }
            </div>
        )
    }
}

export default ConditionalApp