import { useEffect, useState } from "react";
import "../assets/styles/view.css";
import axios from "axios";

const View = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios.get("http://localhost:5000/todos")
      .then(response => setTodos(response.data))
      .catch(error => console.error("Error fetching todos:", error));
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/todos/${id}`)
      .then(() => fetchTodos())
      .catch(error => console.error("Error deleting todo:", error));
  };

  const editTodo = (todo) => {
    setEditingTodo(todo);
  };

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
              <button className="edit-btn" onClick={() => editTodo(todo)}>Edit</button>
              <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      {editingTodo && <EditTodo todo={editingTodo} fetchTodos={fetchTodos} setEditingTodo={setEditingTodo} />}
    </div>
  );
};

const EditTodo = ({ todo, fetchTodos, setEditingTodo }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const updateTodo = () => {
    axios.put(`http://localhost:5000/todos/${todo._id}`, { title, description })
      .then(() => {
        fetchTodos();
        setEditingTodo(null);
      })
      .catch(error => console.error("Error updating todo:", error));
  };

  return (
    <div className="edit-modal">
      <h3>Edit To-Do</h3>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      <button onClick={updateTodo}>Save</button>
      <button onClick={() => setEditingTodo(null)}>Cancel</button>
    </div>
  );
};

export default View;
