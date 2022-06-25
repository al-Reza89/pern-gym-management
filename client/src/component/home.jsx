import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="main">
      <div className="pr-heading">
        <h2>STEP UP YOUR</h2>
        <h1>
          <span>FITNESS</span>WITH US
        </h1>
        <p className="details">
          Buils Your Body And Fitness With Professional Touch
        </p>
        <div className="header-btns">
          <Link to={"/register"}>
            <button className="header-btn">JOIN US</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;