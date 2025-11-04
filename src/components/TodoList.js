import React, {useState} from "react";

function TodoList({todos, handleComplete}){
    console.log(todos)
    return (
        <div>
            <h2>Child Component</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        {!todo.completed ? (
                            <button onClick={() => handleComplete(todo.id)}>Complete</button>
                        ) : (
                            <span></span>
                        )}
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default TodoList;