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

27. State Practice
Challenge
Given an incomplete class-based component without a constructor, add a constructor
and initialize state to fix the broken component.

28. State Practice 2
Given a stateless functional component, add state to it, state should have a property call 'isLoggedIn' which is a boolean (true if logged in false if not) 
Then give your best shot at rendering the word "in" if the user is logged "in" or "out" if the user is logged out.

29. Todo App Phase 4 
In the previous iteration of this todo list app, we pulled in todos data from a JSON file and mapped over it to display the todo items.

Eventually we'll want to be able to modify the data, which will only happen if we've "loaded" the data in to the component's state

Challenge: Change tha <App /> component into a stateful class component and load the imported `todosData` into state.

30. Handling Events in React
Find full list of React Supported events 
https://reactjs.org/docs/events.html#supported-events

31. ToDo App Phase-5 
Cleared the OnChange warning on the previous iteration of the Todo App by adding a Event Handler function to log some console output on check box click event 

32. Changing State 
Created a custom component with a button and a state counter number 

33. Todo App - Phase 6
    Let's make it so our checkbox can actually mark our todo as complete or incomplete!
    This challenge is a little more involved than some of the past ones. Check the comments in the code for some help on accomplishing this one

    Challenge:
    1. Create an event Handler in the App component for when the checkbox is clicked(which is an `onChange` event)
        a. this method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide through this part
    2. pass the method down to the TodoItem component
    3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
    handleChange(id){
        //update state so that the item with the given if flips `completed` from false to true(or vise versa)
        //remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the`.map` method to do this)
    }