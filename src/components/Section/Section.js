import React from "react";
import Slider from "react-slick";
import Card from "./Card/Card";
import "./Section.css";
export default function Section({ title, data }) {
  console.log(title, data);
  return (
    <section className="Section">
      <h4>{title}</h4>
      <Slider slidesToShow={3} slidesToScroll={3}>
        {data?.map((currentValue) => (
          <Card key={currentValue.id} movie={currentValue} />
        ))}
      </Slider>
    </section>
  );
}
