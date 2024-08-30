import React, { useEffect, useState } from "react";
import "./header.css";
import Auth from "../../Auth";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

const MainHeader = () => {
  const activeUser = useLocation();
  const { loginedUser, loginedUserId } = activeUser.state || {
    loginedUser: [],
    loginedUserId: [],
  };

  const [domain, setDomain] = useState(null);

  useEffect(() => {
    const fetchDomain = async () => {
      if (loginedUserId) {
        try {
          const response = await Auth.getDomainById(loginedUserId);
          console.log("Domain fetched: ", response);
          setDomain(response);
        } catch (error) {
          console.error("Error fetching domain: ", error);
        }
      }
    };

    fetchDomain();
  }, [loginedUserId]);

  console.log("well this is thee domain", domain);
  console.log("what is the login useer name", loginedUser);

  let domainLink = "/";
  if (domain === "Workers") {
    domainLink = `/worker-dashboard/:${loginedUserId}`;
  } else if (domain === "Engineers") {
    domainLink = `/engineer-dashboard/:${loginedUserId}`;
  } else if (domain === "Company") {
    domainLink = `/companies-dashboard/:${loginedUserId}`;
  }

  return (
    <div className="space-given-for-header-adjustment">
      <div className="main-header">
        <div className="main-header-logo">BuildIn</div>
        <div className="main-header-search-option">
          <div className="ui huge action input search-option">
            <input type="text" placeholder="Search..." />
            <button className="ui huge icon button ">
              <i className="search icon"></i>
            </button>
          </div>
        </div>
        <nav className="main-header-nav-bar">
          <ul>
            <li>
              <button>
                <Link to="/">Home</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/worker">Hire Now</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/knowaboutus">About</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/getajob">Book Consultancy</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/contactus">Contact</Link>
              </button>
            </li>
          </ul>
        </nav>
        <div className="main-header-login-register">
          <div className="react-profile-pic">
            <CgProfile className="login-register-image" />
          </div>
          <div className="login-or-signup">
            {loginedUser ? (
              <Link to={domainLink}>
                <span>{loginedUser}</span>
              </Link>
            ) : (
              <Link to="/login">LOGIN/REGISTER</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
