import React from "react";
import Footer from "../../../Shared/Footer/Footer";

import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Services from "../../Services/Services";
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
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
