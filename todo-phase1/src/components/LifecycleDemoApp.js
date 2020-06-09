import React, {Component} from "react"

class LifecycleDemoApp extends Component{
    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
        //GET the data I need to correctly display 
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.whatever !== this.props.whatever){
            //do something important here
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        //return ture if want it to update
        //return false if not
    }

    componentWillUnmount(){
        //Teardown or cleanup your code before your component disappears
        //Eg:remove event listener
    }

    render(){
        return (
            <div>
                Code goes here 
            </div>
        )
    }
}
export default LifecycleDemoApp