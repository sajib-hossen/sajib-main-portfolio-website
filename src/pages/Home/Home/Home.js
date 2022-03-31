import React from "react";
import Services from "../../../Services/Services";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";
import Skills from "../../Skills/Skills";
import Banner from "../Banner/Banner";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* <Navigation /> */}
      <Banner />
      <Services />
      <Skills />
    </div>
  );
};

export default Home;
