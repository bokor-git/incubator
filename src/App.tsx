import React from 'react';
import './App.css';
import TodoList from "./Todolist/Todolist";
import {sum} from "./lessons/lessons1"
import {imp} from "./lessons/lessons2"

sum(12, imp)

function App() {
  return (
    <div className="App">
    <TodoList/>
    </div>
  );
}

export default App;
