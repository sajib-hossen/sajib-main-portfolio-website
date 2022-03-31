import React from "react";
import git from "../../images/github.png";
import linkdin from "../../images/linkedin.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import youtube from "../../images/youtube.png";

const Footer = () => {
  return (
    <div className="container text-center">
      <h1>Sajib Hossen</h1>
      <p>
        Hi Thanks for visit my website. That's All of you need to know about me
        And You Can connect with me given the bellow social media website
      </p>
      <div className="socilaIcon d-flex justify-content-center mx-2 my-3">
        <li>
          <a
            href="https://github.com/sajib-hossen"
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ width: "50px", margin: "0 10px" }} src={git} alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sajib-hossen/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ width: "50px", margin: "0 10px" }}
              src={linkdin}
              alt=""
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/sajibhossensa90/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ width: "50px", margin: "0 10px" }}
              src={instagram}
              alt=""
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100018329389359"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ width: "50px", margin: "0 10px" }}
              src={facebook}
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img
              style={{ width: "50px", margin: "0 10px" }}
              src={youtube}
              alt=""
            />
          </a>
        </li>
      </div>
    </div>
  );
};

export default Footer;
