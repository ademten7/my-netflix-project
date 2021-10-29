import React from "react";
import Card from "./Card/Card";
import "./Section.scss";

const Section = () => {
  return (
    <section className="Section">
      <h4>Action</h4>
      <div className="Cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Section;
