import React from "react";
import { Container, Row } from "react-bootstrap";
import Navigation from "../../../Shared/Navigation/Navigation";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Container>
        <Row className="banner-row">
          <div className="col-12 col-sm-6 col-md-6">
            <div className="wrapper"></div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 ">col-4</div>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
