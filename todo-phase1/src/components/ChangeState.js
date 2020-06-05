import React ,{Component} from "react";

class ChangeState extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleResetClick = this.handleResetClick.bind(this)
    }
    handleClick(){
        this.setState(prevState =>{
            return{
                count : prevState.count + 1
            }
        })
    }
    handleResetClick(){
        this.setState({count:0})
    }
    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
                <button onClick={this.handleResetClick}>Reset</button>
            </div>
        )
    }
}
export default ChangeState