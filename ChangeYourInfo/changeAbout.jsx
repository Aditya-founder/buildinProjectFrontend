import React, { useState } from "react";
import Auth from "../../Auth";
import { useNavigate } from "react-router-dom";
import "./changeMessage.css"; // Import the CSS file

const ChangeMessage = () => {
  const navigate = useNavigate();
  const [about, setAbout] = useState("");

  const handleChange = (event) => {
    setAbout(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("what is about message", about);

    try {
      const response = await Auth.updateAboutOfEngineers(about);
      console.log("Response from server lemlu: ", response);

      if (response) {
        console.log("Congrats you can proceed further");
        alert("Youe have successfully updated your about section");
        navigate("/");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Something error happend", error);
      alert("oh shit something error happend");
    }
  };

  return (
    <div className="message-form-container">
      <form onSubmit={handleSubmit} className="message-form">
        <div className="message-form-group">
          <label htmlFor="about" className="message-form-label">
            About Me:
          </label>
          <textarea
            id="about"
            value={about}
            onChange={handleChange}
            className="message-form-textarea"
            placeholder="Write your message here..."
          />
        </div>
        <div className="message-form-group">
          <button type="submit" className="message-submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeMessage;
