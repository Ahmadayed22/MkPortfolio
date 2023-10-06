import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/togglemenu.css';
const Togglemenu = ({ isOpen, onClick }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link
            className={`${isOpen ? 'toggle ' : ''}`}
            onClick={onClick}
            to="/"
          >
            Personal Portfolio
          </Link>
        </li>
        <li>
          <Link
            className={`${isOpen ? 'toggle ' : ''}`}
            onClick={onClick}
            to="/Courses"
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            className={`${isOpen ? 'toggle ' : ''}`}
            onClick={onClick}
            to="/bio"
          >
            Bio
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Togglemenu;
