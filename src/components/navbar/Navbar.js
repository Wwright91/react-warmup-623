import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            {" "}
            <Link to="/workouts">Workouts</Link>
          </button>
          <button>
            {" "}
            <Link to="/create">Create Workout</Link>
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
