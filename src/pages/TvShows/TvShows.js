import "./TvShows.css";
import React from "react";
import Section from "../../components/Section/Section";
import { actionTvShows, newTvShows } from "../../api/tvShows";

export default function TvShows() {
  return (
    <div>
      <Section title="New Tv Shows" data={newTvShows} content="tv-show" />
      <Section title="Action Tv Shows" data={actionTvShows} content="tv-show" />
    </div>
  );
}
