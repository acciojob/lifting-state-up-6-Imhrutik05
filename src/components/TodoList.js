import React from "react";

function TodoList({todos, handleComplete}){
    return (
        <div>
            <h2>Child Component</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        {!todo.completed ? (
                            <button data-testid={`complete-${todo.id}`} onClick={() => handleComplete(todo.id)}>Complete</button>
                        ) : (
                            <span data-testid={`complete-${todo.id}`}></span>
                        )}
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default TodoList;