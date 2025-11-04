
import React, {useState} from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Projects", completed: false },
    { id: 3, text: "Be a Front End Developer", completed: false }
  ]);

  // this function takes an id, and maps on the array todos, if the id matches with todo.id then it modifies that todo object (specifically modifies completed:true)
  const handleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed:true} : todo
    ));
  }
  return (
    <div>
        <h1>Parent Component</h1>
        <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App;
