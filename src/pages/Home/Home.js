import "./Home.css";
import React from "react";
import Section from "../../components/Section/Section";
import { actionMovies, newMovies } from "../../api/movies";
import { actionTvShows, newTvShows } from "../../api/tvShows";
// let content = "movie"
export default function Home() {
  return (
    <div>
      <Section title="Action Movies" data={actionMovies} content="movie" />
      <Section title="New Movies" data={newMovies} content="movie" />
      <Section title="New Tv Shows" data={newTvShows} content="tv-show" />
      <Section title="Action Tv Shows" data={actionTvShows} content="tv-show" />
    </div>
  );
}
