import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld(){
    return (
        <div>
            <h1>Hello World</h1>
            <p>This is a Paragraph</p>
        </div>
    )
}

function MyTodoApp() {
    return (
        <div><ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        </div>
    )
}
//Objectives for Funtional Components practice 
// 1. Setup the basic React Code from Scratch 
// 2. Create a Fucntional component called MyInfo that return the following UI:
    // a. An H1 with your name 
    // b. A paragraph with a little blurb about yourself
    // c. An ordered or Unordered list of the top 3 vacation spots you'd like to visit 
// 3. Render an instance of that functional component to the browser 
// Extra Challenge: learn on your own (Google!) how you can add some style to your page.
function MyInfo(){
    return (
        <div>
            <h1>Saranyan Senthivel</h1>
            <p>I am a Software Engineer currently working with DXC Technology in New Orleans, Louisiana. I completed my Master's in Computer Science at University of New Orleans
                Completed my Bachelor's from Dr. Mahalingam College of Engineering and technology, Pollachi, India (Anna University). My hobbies are Gardening, Maintaining a planted aquarium and wanderlust.
            </p>
            <ul >Vacation spots
                <li>Paris</li>
                <li>London</li>
                <li>Newyork</li>
            </ul>
        </div>
    )
}
ReactDOM.render(
    <MyInfo/>, 
    document.getElementById("root")
    )
