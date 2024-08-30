import React from "react";
import "./postyourrequirement.css";
import { Link } from "react-router-dom";

const postyourrequirement = () => {
  return (
    <div>
      <div className="post-your-requirement">WHAT ARE YOU SEARCHING FOR</div>
      <div className="who-are-you">
        <div className="who-are-you-container">
          <button className="who-are-you-box">
            <Link to="/architectrequirement">ARCHITECT</Link>
          </button>

          <button className="who-are-you-box">
            <Link to="/civil-requirement">CIVIL</Link>
          </button>
        </div>
        <div className="who-are-you-container">
          <button className="who-are-you-box">
            <Link to="/painterrequirement">PAINTER </Link>
          </button>
          <button className="who-are-you-box">
            <Link to="/plumber-requirement">PLUMBER</Link>
          </button>
        </div>
        <div className="who-are-you-container">
          <button className="who-are-you-box">
            <Link to="/contractor-requirement">CONTRACTOR</Link>
          </button>
          <button className="who-are-you-box">
            <Link to="/companies-requirement">COMPANIES</Link>
          </button>
        </div>
        <div className="who-are-you-container">
          <button className="who-are-you-box">
            <Link to="/marble-requirement">
              <Link to="/marbleworker-requirement">MARBLE WORKER</Link>
            </Link>
          </button>
          <button className="who-are-you-box">
            <Link to="/masonworker-requirement">MASON WORKER</Link>
          </button>
        </div>
        <div className="who-are-you-container">
          <button className="who-are-you-box">
            <Link to="/electricianrequirement">ELECTRICIAN</Link>
          </button>
          <button className="who-are-you-box">
            <Link to="/interiordesigner-requirement">INTERIOR DESIGNER</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default postyourrequirement;
