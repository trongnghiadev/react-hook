const Addtodo = (props) => {
    const { todo, setTodo, handleClickbtn } = props;
    return (<div>
        <label>Todo's Name: </label>
        <input value={todo} type='text'
            onChange={(event) => { setTodo(event.target.value) }} />
        <button type="button" onClick={(event) => handleClickbtn()} >submit</button>
        <br />  <br />
    </div>)
}

export default Addtodo;