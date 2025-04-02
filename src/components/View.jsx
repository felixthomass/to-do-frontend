import { useEffect,useState } from "react";
import '../assets/styles/view.css';
import axios from "axios";
const View = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://to-do-backend-2mtn.onrender.com/todos")
      .then(response => setTodos(response.data))
      .catch(error => console.error("Error fetching todos:", error));
  }, []);

  return (
    <div className="container">
      <h2>To-Do List</h2>
      {todos.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo._id} className="todo-item">
              <h3 className="todo-title">{todo.title}</h3>
              <p className="todo-description">{todo.description}</p>
              <p className="todo-date">Due: {todo.dueDate}</p>
              <span className={`priority ${todo.priority.toLowerCase()}`}>
                {todo.priority}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default View;