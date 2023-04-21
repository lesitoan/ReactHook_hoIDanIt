import './App.css';
import { useState } from 'react';
import Nav from './views/Nav';
import Todos from './views/Todos';

const data = [
  {
    id: 1,
    title: 'quét nhà'
  }
]

function App() {
  const [todos, setTodos] = useState(data);
  const [todo, setTodo] = useState({});
  const [id, setId] = useState(2);

  const deleteTodo = (id) => {
    setTodos((preven) => (
      preven.filter((todo) => (todo.id !== id))
    ))
  }

  const handleOnChange = (e) => {
    const currentTodo = {
      id: id,
      title: e.target.value
    }
    setTodo(currentTodo);
    setId(id + 1);
  };

  const handleOnClick = () => {
    console.log(todo)
    if (!todo.title) {
      return alert('Bạn chưa nhập dữ liệu !!!!');
    }
    setTodos([...todos, todo]);
    setTodo({ title: '' });
  };

  return (
    <div className="App">
      <Nav />
      <h1>thêm todo list của bạn !!!</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <input value={todo.title} onChange={(e) => handleOnChange(e)} type="text" />
      <button onClick={handleOnClick}>Thêm todo</button>
    </div>
  );
}

export default App;
