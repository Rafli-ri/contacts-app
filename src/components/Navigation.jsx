import React from "react";
import { Link } from "react-router-dom";

function Navigation({ logout, name }) {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <button onClick={logout}>{name} Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
