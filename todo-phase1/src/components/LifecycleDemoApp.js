import React, {Component} from "react"

class LifecycleDemoApp extends Component{
    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
        //GET the data I need to correctly display 
    }
    /* These three methods are deprecated in version 16 React 
    componentWillMount(){

    }
    componentWillReceiveProps(){

    }
    componentWillUpdate(){
        
    } */

    static getDerivedStateFromProps(props,state){
        //return the new updated state based upon the props

    }

    getSnapshotBeforeUpdate(){
        // this creates a backup of the current way things are 
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