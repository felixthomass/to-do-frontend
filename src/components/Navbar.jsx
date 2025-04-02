import { Link } from "react-router-dom";
import "../assets/styles/nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">To-Do App</h1>
      <ul className="nav-links">
        <li><Link to="/add">Add To-Do</Link></li>
        <li><Link to="/view">View To-Do</Link></li>
        <li><Link to="/edit">Edit To-Do</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
