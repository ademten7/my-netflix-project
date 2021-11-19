import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
export default function Card({ movie }) {
  console.log("Movie ==> ", movie.image);
  return (
    <Link to={`/movie/${movie.id}`}>
      <article
        className="Card"
        style={{ backgroundImage: `url(${movie.image})` }}
      >
        <h4>{movie.title}</h4>
      </article>
    </Link>
  );
}

//params = {key:value}
// ==> key from Route
// ==> value from Link

// <Link to={"/movie/" + movie.id}>
