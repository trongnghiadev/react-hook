const DisplayTodo = (props) => {
    const DeletetodoFormchild = (id) => {
        props.deleteTodoinParent(id)

    }
    const listTodo = props.childData;

    return (<div>
        <div>--------------------Listtodo---------------------- </div>
        {listTodo.map((item, index) => {
            return (<div key={item.id} onClick={() => DeletetodoFormchild(item.id)}>{item.name}</div>)
        })}
    </div>)
}

export default DisplayTodo;