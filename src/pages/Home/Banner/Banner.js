import React from "react";
import { Container, Row } from "react-bootstrap";
import me from "../../../images/man.png";
import "./Banner.css";
import git from "../../../images/github.png";
import linkdin from "../../../images/linkedin.png";
import instagram from "../../../images/instagram.png";
import facebook from "../../../images/facebook.png";
import youtube from "../../../images/youtube.png";
import Navigation from "../../../Shared/Navigation/Navigation";

const Banner = () => {
  return (
    <>
      <Container>
        <Row className="banner-row">
          <Navigation />
          <div className="col-12 col-sm-6 col-md-6 ">
            <div className="wrapper">
              <div className="banner-text">
                <p>Welcome to my world</p>
                <p>Hello</p>
                <h1>I'm Sajib Hossen</h1>
                <h2>I am a Javacript web-developer</h2>
              </div>
              <div className="banner-icon">
                <li>
                  <a
                    href="https://github.com/sajib-hossen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={git} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sajib-hossen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkdin} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sajib-hossen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={instagram} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sajib-hossen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sajib-hossen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={youtube} alt="" />
                  </a>
                </li>
              </div>
              <div className="banner-button">
                <button>Hire Me</button>
                <button>Download CV</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            <div className="banner-shap"></div>
            <div className="banner-image">
              <img src={me} alt="" />
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Banner;
