import React from "react";
import Services from "../../../Services/Services";
import About from "../../About/About";
import Skills from "../../Skills/Skills";
import Banner from "../Banner/Banner";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Services />
      <About />
      <Skills />
    </div>
  );
};

export default Home;
