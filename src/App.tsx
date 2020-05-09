import React from 'react';
import './App.css';
import TodoList from "./Todolist/Todolist";
import {sum} from "./lessons/lessons1"

console.log(sum(12, 34))

function App() {
  return (
    <div className="App">
    <TodoList/>
    </div>
  );
}

export default App;
