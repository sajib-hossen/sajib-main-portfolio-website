import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Banner />
    </div>
  );
};

export default Home;
