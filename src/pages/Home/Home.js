import "./Home.css";
import React from "react";
import Section from "../../components/Section/Section";
import { actionMovies, newMovies } from "../../api/movies";

export default function Home() {
  return (
    <div>
      <Section title="Action Movies" data={actionMovies} />
      <Section title="New Movies" data={newMovies} />
      <Section title="New Tv Shows" />
      <Section title="Action Tv Shows " />
    </div>
  );
}
