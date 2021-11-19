import React, { useState } from "react";
import "./SinglePageMovie.css";
import { useParams } from "react-router-dom";
import movies from "../../api/movies";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { BsFillPlayCircleFill } from "react-icons/bs";

const SinglePageMovie = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(useParams());
  const parameter = useParams();
  let movie = movies.find((movie) => movie.id === parameter.id);
  console.log({ parameter });

  return (
    <div className="single">
      {movie && (
        <div className="single-page">
          <h1>{movie.title}</h1>
          <img src={movie.image} alt="" width="400" />
          <h3>Details:</h3>
          <p>{movie.description}</p>
        </div>
      )}
      <div>
        <Button size="lg" variant="primary" onClick={handleShow}>
          <BsFillPlayCircleFill />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>X</Modal.Header>
          <Modal.Body>
            <iframe
              width="560"
              height="315"
              src={movie.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default SinglePageMovie;
