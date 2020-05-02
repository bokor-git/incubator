import React from "react";
import "./todolist.css"

type Todo= {
    userId: number
    id: number
    title: string
    completed: boolean
    del: Function
    check:Function
}

export const TodoItem = ({id, title, completed, del, check}:Todo) => {
    return <div className={`todo-item ${completed?"done":"not-done"}`}>{completed ? "✔" : "✘"}  {title}
    <input  style={completed?{display:"none", marginRight:"1rem"}:{display:"initial",marginRight:"1rem"}} type="checkbox" checked={completed} onChange={()=>check(id)}/>
    <button style={!completed?{display:"none"}:{display:"initial"}}  onClick={()=>del(id)}>Delete</button></div>
};
