import React from "react";
import "./materialmaster.css";
import { Link } from "react-router-dom";

const materialmaster = () => {
  return (
    <div className="materialbg">
      <div className="material-left">
        <div className="shop-with-us">Shop With Us</div>
        <div className="our-shop-services">
          <div>WE PROVIDE</div>
          <div>HIGH QUALITY</div>
          <div>MATERIALS</div>
        </div>
        <div className="price-declaration">AT BEST PRICE</div>

        <button className="explorance">
          <Link to="/shop">
            <div className="select-explore">Explore</div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default materialmaster;
