import "./Home.css";
import React from "react";
import Section from "../../components/Section/Section";

export default function Home() {
  return (
    <div>
      <Section title="Action Movies" />
      <Section title="New Movies" />
      <Section title="New Tv Shows" />
      <Section title="Action Tv Shows " />
    </div>
  );
}
