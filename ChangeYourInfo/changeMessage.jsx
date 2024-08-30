import React, { useState } from "react";
import Auth from "../../Auth";
import "./changeMessage.css";
import { useNavigate } from "react-router-dom";

const ChangeMessage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Message submitted:", message);

    try {
      const response = await Auth.updateMessageSectionOfEngineers(message);
      console.log("Response from server lemlu: ", response);

      if (response) {
        console.log("Congrats you can proceed further");
        alert("Youe have successfully updated your message section");
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
          <label htmlFor="message" className="message-form-label">
            Message From My Side:
          </label>
          <textarea
            id="message"
            value={message}
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
