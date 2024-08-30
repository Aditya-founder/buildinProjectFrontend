import React, { useState } from "react";
import Auth from "../../Auth";
import { useNavigate } from "react-router-dom";
import "./emailPasswordForm.css";

const EmailPasswordForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Email is :-", email);
    console.log("Email is :-", password);

    try {
      const response = await Auth.checkMailAndPassword(email, password);
      console.log("Response from server lemlu: ", response);

      if (response) {
        console.log("Congrats you can proceed further");
        navigate("/change-delete-options-dashboards");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Something error happend", error);
      alert("Either password or mail is wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="dashboard-form">
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Whats Your Old Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Please Confirm Your Old Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="email-password-btn">
        Submit
      </button>
    </form>
  );
};

export default EmailPasswordForm;
