import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="footer-top">
          <div className="footer-left">
            <div className="footer-classification">
              <div className="sub-header-container">
                <div className="sub-header">
                  <div className="header">Hire Now</div>
                </div>
                <ul className="footer-classification">
                  <Link to="/selectcompany">
                    <li>Hire Companies</li>
                  </Link>
                  <Link to="/worker">
                    <li>Hire Workers</li>
                  </Link>
                  <Link to="/hireengineers">
                    <li>Hire Engineers</li>
                  </Link>
                  <li>Hire Contractors</li>
                </ul>
              </div>
            </div>
            <div className="footer-classification">
              <div className="sub-header-container">
                <div className="sub-header">
                  <div className="header">Designs</div>
                </div>
                <ul className="footer-classification">
                  <li>XYZ</li>
                  <li>XYZ</li>
                  <li>XYZ</li>
                  <li>XYZ</li>
                </ul>
              </div>
            </div>
            <div className="footer-classification">
              <div className="sub-header-container">
                <div className="sub-header">
                  <div className="header">All</div>
                </div>
                <ul className="footer-classification">
                  <Link to="/">
                    <li>Home</li>
                  </Link>
                  <Link to="/knowaboutus">
                    <li>About</li>
                  </Link>
                  <Link to="/getajob">
                    <li>Find A Job</li>
                  </Link>
                  <li>FAQs</li>
                  <Link to="/contactus">
                    <li>Contact</li>
                  </Link>
                  <Link to="/projectpage">
                    <li>Projects</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="follow-us-on">Follow Us On :</div>
            <div className="social-media-platforms">
              <img
                src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_1280.png"
                alt="platform1-image"
              />
              <img
                src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338507_1280.png"
                alt="platform2-image"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="platform3-image"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/2496/2496110.png"
                alt="platform4-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ui section divider"></div>
      <div className="copyright">© 2024 BUILDIN. All rights reserved.</div>
    </div>
  );
};

export default Footer;
