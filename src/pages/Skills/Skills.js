import React from "react";

import "./Skills.css";

const Skills = () => {
  return (
    <div className="container my-5">
      <div className="row text-center mt-5">
        <h1>I am expert on</h1>
        <hr className="hr" />
        <p>
          Basically I'm a MERN(MongoDB, ExpressJs, React, NodeJS) Developer.
          Because I love Javascript. It taste more well than Biriyani for me.
        </p>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="progressSingle">
            <h3>HTML</h3>
            <div className="progress" style={{ height: "22px" }}>
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: " 95%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                95%
              </div>
            </div>
          </div>
          <div className="progressSingle">
            <h3>Javascript</h3>
            <div className="progress" style={{ height: "22px" }}>
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: " 70%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                70%
              </div>
            </div>
          </div>
          <div className="progressSingle">
            <h3>Bootstrap</h3>
            <div className="progress" style={{ height: "22px" }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: " 90%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>
          </div>
          <div className="progressSingle">
            <h3>TypeScript</h3>
            <div className="progress" style={{ height: "22px" }}>
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: " 55%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                55%
              </div>
            </div>
          </div>
          <div className="progressSingle">
            <h3>MongoDB</h3>
            <div className="progress" style={{ height: "22px" }}>
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: " 65%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                65%
              </div>
            </div>
          </div>
          <div className="progressSingle">
            <h3>React-Native</h3>
            <div className="progress" style={{ height: "22px" }}>
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: " 35%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                35%
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="progressSingle">
            <h3>CSS</h3>
            <div className="progress" style={{ height: "22px" }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: " 90%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>
          </div>
          <div className="progressSingle">
            <h3>React</h3>
            <div className="progress" style={{ height: "22px" }}>
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: " 75%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                75%
              </div>
            </div>
          </div>
          <div className="progressSingle">
            <h3>Redux</h3>
            <div className="progress" style={{ height: "22px" }}>
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: " 45%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                45%
              </div>
            </div>
          </div>
          <div className="progressSingle">
            <h3>NodeJs</h3>
            <div className="progress" style={{ height: "22px" }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: " 65%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                65%
              </div>
            </div>
          </div>
          <div className="progressSingle">
            <h3>ExpressJs</h3>
            <div className="progress" style={{ height: "22px" }}>
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={{ width: " 85%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                85%
              </div>
            </div>
          </div>
          <div className="progressSingle">
            <h3>Tailwind CSS</h3>
            <div className="progress" style={{ height: "22px" }}>
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: " 85%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                85%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
