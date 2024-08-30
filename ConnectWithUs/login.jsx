import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../Auth";
import { AxiosWrapperContext } from "../../Auth/AxiosWrapper";

const Login = () => {
  const { apiPost } = useContext(AxiosWrapperContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      // const response = await Auth.logIN({
      // email: formData.email,
      // password: formData.password,
      //   apiPost,
      // });
      const response = await apiPost("profile/login-system", {
        email: formData.email,
        password: formData.password,
      });

      console.log("what will be the response from apiPost", response.data.user);

      if (response.data) {
        console.log("login success");
        navigate("/", {
          state: {
            loginedUser: response.data.user.username,
            loginedUserId: response.data.user._id,
          },
        });
      } else {
        alert(response.data);
      }
    } catch (error) {
      console.error("Error while log in", error.message);
      alert("Failed to log in");
    }
  };

  // useEffect(() => {
  //   const logInDefault = async () => {
  //     const response = await apiPost("profile/login-system", {
  //       email: formData.email,
  //       password: formData.password,
  //     });
  //     if (response.data) {
  //       console.log("login success");
  //       navigate("/");
  //     } else {
  //       alert(response.data);
  //     }
  //   };
  //   logInDefault();
  // }, []);

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <div className="login-entry-left">
            <div className="login-entry-left-header">SignIn</div>
            <form onSubmit={handleSubmit}>
              <div className="ui form input-field">
                <div className="field">
                  <label>EMAIL</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="EMAIL"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="ui form input-field">
                <div className="field">
                  <label>PASSWORD</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="PASSWORD"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sign-in-btn">
                <button type="submit" className="fluid ui button">
                  Sign In
                </button>
              </div>
              <div className="extra-signin-content">
                <div className="ui checkbox check-remember">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label>Remember Me</label>
                </div>
                <div className="forgot-link">
                  <a href="example.com" alt="forgotLink">
                    FORGOT PASSWORD
                  </a>
                </div>
              </div>
              <div className="ui horizontal divider">Or</div>
              <div className="another-options">
                <div className="another-all-options">
                  You Can Also Login via
                </div>
                <div className="options-buttons">
                  <button
                    type="button"
                    className="ui brown basic button login-option"
                  >
                    Google
                  </button>
                  <button
                    type="button"
                    className="ui blue basic button login-option"
                  >
                    Facebook
                  </button>
                  <button
                    type="button"
                    className="ui red basic button login-option"
                  >
                    Insta
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="column login-entry-right">
            <div className="if-no-account">
              <div className="right-box-content">
                <div className="welcome">Welcome To Login</div>
                <div className="message-no-account">Don't have an account?</div>
              </div>

              <Link to="/sign-up">
                <div className="signup-box">
                  <button>
                    <div className="sign-up-content">Sign Up</div>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
