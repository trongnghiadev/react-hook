import React, { useState } from "react";

const Todolist = () => {
    const [listTodo, setLisTtodo] = useState(
        [
            { id: "todo1", name: "watching youtobe" },
            { id: "todo2", name: "watching TV" },
            { id: "todo3", name: "watching FB" }
        ]
    )
    const [todo, setTodo] = useState("")
    const handleClickbtn = () => {
        let todoItem = {
            id: 'abc', name: todo,
        }
        setLisTtodo([...listTodo, todoItem])
    }



    return (
        <div>
            <label>Todo's Name: </label>
            <input value={todo} type='text'
                onChange={(event) => { setTodo(event.target.value) }} />
            <button type="button" onClick={(event) => handleClickbtn()} >submit</button>
            <br />  <br />
            <div>--------------------Listtodo---------------------- </div>
            {listTodo.map((item, index) => {
                return (<div key={item.id}>{item.name}</div>)
            })}
        </div>
    );
}

export default Todolist;