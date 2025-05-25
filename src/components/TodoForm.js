import React, { useState } from 'react';
function TodoForm({addTodo}) {
    const [todoTitle, setTodoTitle] = useState("");
    const handelClick = (e) => {
        e.preventDefault();
        if(todoTitle.trim() !== ""){
            addTodo(todoTitle);
            setTodoTitle("");
        }else{
            alert("Please Enter Your Title First!");
        }
    };
    return (
        <div>
            <div className='todoForm'>
                <label htmlFor='todoTitle'>Enter Your Todo Title</label>
                <input type='text' placeholder='Enter Your Todo Title' name='todoTitle' value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)} required />
            </div>
            <div className='buttonBox'>
                <button onClick={handelClick}>Add</button>
            </div>
        </div>
    )
}
export default TodoForm;