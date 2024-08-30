import React, { useState } from "react";
import "./submission.css"; // Import the CSS file

const Submission = () => {
  const [onlineService, setOnlineService] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log(`Online service choice: ${onlineService}`);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="submission-container">Thank you for your response!</div>
    );
  }

  return (
    <div className="submission-container">
      <form className="submission-form" onSubmit={handleSubmit}>
        <div>Would you consider online service?</div>
        <div className="online-service-radio">
          <input
            type="radio"
            name="onlineService"
            id="yes"
            value="yes"
            onChange={(e) => setOnlineService(e.target.value)}
          />
          <label htmlFor="yes">Yes</label>
        </div>
        <div className="online-service-radio">
          <input
            type="radio"
            name="onlineService"
            id="no"
            value="no"
            onChange={(e) => setOnlineService(e.target.value)}
          />
          <label htmlFor="no">No</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Submission;
