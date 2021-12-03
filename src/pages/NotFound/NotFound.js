import "./NotFound.css";
import React from "react";
import bear from "../../images/bear.gif";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Sorry, Page not Found</h1>
      <img src={bear} alt="bear-gif" />
      <Link to="/">
        <button className="go-home">Go Home</button>
      </Link>
    </div>
  );
}
