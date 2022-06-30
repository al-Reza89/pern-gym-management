import React from "react";
import { Link } from "react-router-dom";

function Offer() {
  return (
    <div id="presentaion">
      <div className="pr-heading">
        <h1>
          {" "}
          A Big <span>OFFER</span>FOR THIS SUMMER
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div className="pr-btns">
          <Link to={"/register"}>
            <button className="pr-btn">JOIN NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Offer;
