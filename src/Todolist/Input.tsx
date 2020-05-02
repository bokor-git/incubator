import React, {useContext} from "react";
import Context from "./Context";
import "./todolist.css"
type Todo= {
    userId: number
    id: number
    title: string
    completed: boolean
}
type Input = {
    value: string
    setValue: Function
    addTodo: Function
    items: number
    setItems: Function
    setTodos: Function
    addItems: Function
}

const Input = ({value, setValue, addTodo, items, setItems, setTodos, addItems}: Input) => {
const defaultTodo:Todo={
    userId: 0,
    id: 0,
    title: "Todo was cleaned! Please add your todo or generate it!",
    completed: true
}
    return <div className="input"><input type="text" value={value} onChange={event => setValue(event.target.value)}/>
        <button onClick={() => addTodo(value)}>Add my todo</button>
        <div><input type="number" step={1} value={items} onChange={event => setItems(event.target.value)}/>
            <button onClick={() => addItems(items)}>Generate new todo</button>
           <div> <button onClick={() => setTodos([defaultTodo])}>Clear todo</button></div>
        </div>

    </div>

}
export default Input