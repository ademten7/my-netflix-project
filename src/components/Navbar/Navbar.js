import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

// rfc to create simple react component
export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Logo">
        <Link to="/">
          {" "}
          <img
            alt="Netflix logo"
            width={100}
            height={30}
            src="https://play-lh.googleusercontent.com/0rgPYj0GwZ6txpYZrzoMdhwzqg7vY6C9B-Ol7jlaz-Ox2rgpD4Tr82ZgDqkirrEohbGm=w412-h220-rw"
          />
        </Link>
      </div>
      <ul className="NavList">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/tv-shows"> Tv Shows</Link>{" "}
        </li>
        <li>
          <Link to="/movies"> Movies</Link>
        </li>
      </ul>
    </nav>
  );
}
