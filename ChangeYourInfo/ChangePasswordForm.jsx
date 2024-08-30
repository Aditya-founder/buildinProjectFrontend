import React, { useState } from "react";
import "./changeMessage.css"; // Import the CSS file

const ChangeMessage = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Message submitted: ${message}`);
  };

  return (
    <div className="message-form-container">
      <form onSubmit={handleSubmit} className="message-form">
        <div className="message-form-group">
          <label htmlFor="message" className="message-form-label">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={handleChange}
            rows="4"
            cols="50"
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
