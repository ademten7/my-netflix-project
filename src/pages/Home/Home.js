import "./Home.css";
import React, { useEffect, useState } from "react";
import Section from "../../components/Section/Section";
// import { actionMovies, newMovies } from "../../api/movies";
// import { actionTvShows, newTvShows } from "../../api/tvShows";
// let content = "movie"
const backendURL = process.env.REACT_APP_BACKEND_URL;
export default function Home() {
  const [actionMovies, setActionMovies] = useState();
  const [newMovies, setNewMovies] = useState();
  const [actionTvShows, setActionTvShows] = useState();
  const [newTvShows, setNewTvShows] = useState();

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
  const getActionTvShows = async () => {
    const res = await fetch(`${backendURL}/action-tv-shows`);
    const data = await res.json();
    setActionTvShows(data);
  };
  const getNewTvShows = async () => {
    const res = await fetch(`${backendURL}/new-tv-shows`);
    const data = await res.json();
    setNewTvShows(data);
  };

  useEffect(() => {
    // fetch the data
    getActionMovies();
    getNewMovies();
    getActionTvShows();
    getNewTvShows();
  }, []);

  return (
    <div>
      <Section title="Action Movies" data={actionMovies} content="movie" />
      <Section title="New Movies" data={newMovies} content="movie" />
      <Section title="New Tv Shows" data={newTvShows} content="tv-show" />
      <Section title="Action Tv Shows" data={actionTvShows} content="tv-show" />
    </div>
  );
}
