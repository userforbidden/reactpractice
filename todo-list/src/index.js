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

ReactDOM.render(
    <HelloWorld/>, 
    document.getElementById("root")
    )
