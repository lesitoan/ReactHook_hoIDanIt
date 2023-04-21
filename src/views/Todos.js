const Todos = (props) => {
    const todos = props.todos;
    const deleteTodo = props.deleteTodo;
    return (
        <div>
            {todos.map((element, index) => {
                return (
                    <li key={index} >{element.title}  .....
                        <span style={{cursor: 'pointer'}} onClick={() => deleteTodo(element.id)}>x</span>
                    </li>
                )
            })}
        </div>
    );
};

export default Todos;
