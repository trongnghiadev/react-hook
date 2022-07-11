import React, { useState } from "react";
import _ from 'lodash';
import Addtodo from "./Addtodo";
import DisplayTodo from "./Displaytodo";

const Home = () => {
    const [listTodo, setLisTtodo] = useState(
        [
            { id: "todo1", name: "watching youtobe" },
            { id: "todo2", name: "watching TV" },
            { id: "todo3", name: "watching FB" }
        ]
    )
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    const [todo, setTodo] = useState("")
    const handleClickbtn = () => {
        if (!todo) {
            alert("vui lòng nhập")
            return;
        }
        let todoID = random(4, 100)
        let todoItem = {
            id: `todo${todoID}`, name: todo,
        }
        // setLisTtodo([...listTodo, todoItem])
        let currentTodolist = _.clone(listTodo);
        currentTodolist.push(todoItem);
        setLisTtodo(currentTodolist)
        setTodo("");
    }

    const handleDeletetodo = (id) => {

        let currentTodolist = _.clone(listTodo);
        currentTodolist = currentTodolist.filter(item => item.id !== id);
        setLisTtodo(currentTodolist);

    }
    const obj = {
        name: "nhi",
        address: "bt"
    }
    return (
        <div>
            <Addtodo
                handleClickbtn={handleClickbtn}
                setTodo={setTodo}
                todo={todo}
            />

            <DisplayTodo
                childData={listTodo}
                name={"nghia"}
                address={obj}
                deleteTodoinParent={handleDeletetodo}
            />

        </div>
    );
}

export default Home;