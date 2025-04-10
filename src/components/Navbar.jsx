import { Link } from "react-router-dom";
import "../assets/styles/nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Todo Master</h1>
      <ul className="nav-links">
        <li><Link to="/add">Add </Link></li>
        <li><Link to="/view">View </Link></li>
        <li><Link to="/edit">Edit </Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
