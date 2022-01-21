import "./TvShows.css";
import React, { useState, useEffect } from "react";
import Section from "../../components/Section/Section";
// import { actionTvShows, newTvShows } from "../../api/tvShows";
const backendURL = process.env.REACT_APP_BACKEND_URL;
export default function TvShows() {
  const [actionTvShows, setActionTvShows] = useState();
  const [newTvShows, setNewTvShows] = useState();

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
    getActionTvShows();
    getNewTvShows();
  });
  return (
    <div>
      <Section title="New Tv Shows" data={newTvShows} content="tv-show" />
      <Section title="Action Tv Shows" data={actionTvShows} content="tv-show" />
    </div>
  );
}
