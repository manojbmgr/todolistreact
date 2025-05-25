import React, { useState } from "react";
import TodoForm from "./TodoForm";
function List() {
    const [todos, setTodos] = useState([]);
    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    }
    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <div className="todolist">
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default List;