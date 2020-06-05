import React from "react";
import TodoItem from "./TodoItem";
//import ContactCard from "./ContactCard";
import todosData from "../data/todosData"

function TodoHeader(){

    const todoItems = todosData.map(item => <TodoItem key = {item.id} item ={item}/>)
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}

export default TodoHeader