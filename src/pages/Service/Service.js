import React from "react";
import { Card } from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description } = service;
  return (
    <div>
      <Card style={{ margin: "10px", padding: "10px" }}>
        <Card.Img
          variant="top"
          style={{ width: "50%", margin: "0 auto" }}
          src={img}
        />
        <Card.Body className="text-center">
          <Card.Title className="cardTitle">{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
