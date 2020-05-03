import React, {useState} from "react";
import {TodoItem} from "./TodoItem";
import Input from "./Input";
import "./todolist.css"
const axios = require('axios').default;

const TodoList = () => {
    type Todo= {
        userId: number
        id: number
        title: string
        completed: boolean
    }
    const [todos, setTodos] = useState<any>([])
    const [value, setValue] = useState<any>("")
    const [items, setItems] = useState<any>(5)
    if (todos.length===0){axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${items}`).then((response:any)=> setTodos(response.data))}
const addTodo=(value:string):void=>{
        const newTodos:Todo = {userId: 1, id: new Date().getTime(), title: value, completed: false}
        const newArr:any = [...todos, newTodos];
   setTodos(newArr)
};

const del = (id:never):void=>{
   setTodos(todos.filter((td:Todo) => td.id!== id))
}

const check = (id:number)=>{
       setTodos(todos.map((todo:Todo)=>{if (todo.id===id){todo.completed=!todo.completed}
        return todo}))

};
    const addItems = async (items:number)=>{
       let responce = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${items}`)
        await setTodos(responce.data)
    }
   return <div className="todolist">
       <h1>Todolist</h1>
       <hr/>
        <Input value={value}
        setValue={setValue}
        addTodo={addTodo}
        items={items}
        setItems={setItems}
        setTodos={setTodos}
        addItems={addItems}/>
        {todos.map((todo:Todo) => <TodoItem {...todo} del={del} check={check}/>)}
    </div>
}
export default TodoList
