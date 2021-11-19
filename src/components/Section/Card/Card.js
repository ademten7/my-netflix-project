import React, { useState } from "react";
import "./Card.css";

export default function Card({ movie }) {
  //console.log("Movie ==> ", movie.image);

  return (
    <div>
      <article
        className="Card"
        style={{ backgroundImage: `url(${movie.image})` }}
      >
        <h4>{movie.title}</h4>
      </article>
    </div>
  );
}
