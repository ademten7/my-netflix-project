import "./Movies.css";
import React, { useState, useEffect } from "react";
import Section from "../../components/Section/Section";
// import { actionMovies, newMovies } from "../../api/movies";
const backendURL = process.env.REACT_APP_BACKEND_URL;

export default function Movies() {
  const [actionMovies, setActionMovies] = useState();
  const [newMovies, setNewMovies] = useState();
  const getActionMovies = async () => {
    const res = await fetch(`${backendURL}/action-movies`);
    const data = await res.json();
    setActionMovies(data);
  };
  const getNewMovies = async () => {
    const res = await fetch(`${backendURL}/new-movies`);
    const data = await res.json();
    setNewMovies(data);
  };
  useEffect(() => {
    getActionMovies();
    getNewMovies();
  });
  return (
    <div>
      <Section title="Action Movies" data={actionMovies} content="movie" />
      <Section title="New Movies" data={newMovies} content="movie" />
    </div>
  );
}
