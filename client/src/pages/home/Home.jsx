import "./home.css";

import React from "react";
import Navbar from "../../component/Navbar";
import Header from "../../component/home";
import Feature from "../../component/Feature";
import Offer from "../../component/Offer";
import About from "../../component/About";
import Contect from "../../component/Contect";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contect />
    </div>
  );
};

export default Home;
