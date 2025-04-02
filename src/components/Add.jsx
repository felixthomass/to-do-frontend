import { useState } from "react";
import axios from "axios";
import '../assets/styles/add.css'
const Add = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
  });

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://to-do-backend-2mtn.onrender.com/add-todo", todo);
      alert("To-Do Added Successfully!");
      setTodo({ title: "", description: "", dueDate: "", priority: "Low" });
    } catch (error) {
      console.error("Error adding to-do:", error);
    }
  };

  return (
    <div className="container">
      <h2>Add a To-Do</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={todo.title} onChange={handleChange} placeholder="Title" required />
        <textarea name="description" value={todo.description} onChange={handleChange} placeholder="Description" required />
        <input type="date" name="dueDate" value={todo.dueDate} onChange={handleChange} required />
        <select name="priority" value={todo.priority} onChange={handleChange}>
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Add To-Do</button>
      </form>
    </div>
  );
};

export default Add;
