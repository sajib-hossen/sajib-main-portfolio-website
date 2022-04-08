import React from "react";
import me from "../../../images/linkdin-image.png";
import "./Banner.css";
import git from "../../../images/github.png";
import linkdin from "../../../images/linkedin.png";
import instagram from "../../../images/instagram.png";
import facebook from "../../../images/facebook.png";
import youtube from "../../../images/youtube.png";
import Navigation from "../../../Shared/Navigation/Navigation";
import { Typewriter } from "react-simple-typewriter";
import AnimatiedShap from "../../AnimatiedShap/AnimatiedShap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container">
      <div className="row">
        <Navigation />
        <div className="col-sm-12 col-md-6 col-lg-6 mt-5 bannerleft">
          <p>Welcome to my world</p>
          <p>Hello</p>
          <h1>I'm Sajib Hossen</h1>
          <h2>
            I am a{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  "React Developer",
                  "Javascript developer",
                  "Front  Developer",
                  "Full Stack Developer",
                  "MERN Stack Developer",
                  "Wordpress Developer",
                ]}
                loop={5}
                cursor
                cursorStyle="❤"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <div className="row my-3">
            <div className="col-sm-12 col-md-6 d-flex bannerIcon">
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
                  href="https://www.linkedin.com/in/sajib-hossen/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkdin} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sajibhossensa90/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100018329389359"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={facebook} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={youtube} alt="" />
                </a>
              </li>
            </div>
          </div>

          <div className="banner-button">
            <button>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/contact"
              >
                Hire Me
              </Link>
            </button>
            <button>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://drive.google.com/file/d/1F5jR_yHLLxxU4GrMgnNIVVbsaRxnOTtA/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Download Cv
              </a>{" "}
            </button>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 banner-image">
          <div className="">
            <img className="img-fluid" src={me} alt="" />
          </div>
        </div>
      </div>
      <AnimatiedShap />
    </div>
  );
};

export default Banner;

// style={{
//   paddingTop: "5rem",
//   margin: "auto 0",
//   fontWeight: "normal",
// }}
