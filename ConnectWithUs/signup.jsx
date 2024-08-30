import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import Auth from "../../Auth";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleNext = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post("/api/v1/profile/sendotp");
      const response = await Auth.otpGET({
        email: formData.email,
      });
      if (response.data.success) {
        console.log("OTP sent to email");
        setStep(2); // Move to OTP verification step
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error sending OTP", error);
      alert("Failed to send OTP");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("form data of signup", formData, otp);

    try {
      const response = await Auth.signIN({
        ...formData,
        otp,
      });

      if (response.status) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Error during signup", error);
      alert("Signup failed");
    }
  };

  return (
    <div className="signup-page">
      {step === 1 ? (
        <form className="signup-form" onSubmit={handleNext}>
          <h2>Signup Form</h2>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact Number:</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Next</button>
        </form>
      ) : (
        <form className="otp-form" onSubmit={handleSubmit}>
          <h2>OTP Verification</h2>
          <div className="form-group">
            <label>Enter OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              required
            />
          </div>
          <button type="submit">Verify OTP & Signup</button>
        </form>
      )}
    </div>
  );
};

export default Signup;
