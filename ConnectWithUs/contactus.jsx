import React, { useState } from "react";
import "./contactus.css";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import Auth from "../../Auth";

const ContactUs = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    try {
      const response = await Auth.contactUsSubmission(formData);
      if (response.data.success) {
        console.log("Your data is successfully sended");
        alert(
          "Message successfully send , We will contact you ASAP . Click on ok for Back to homepage"
        );
        navigate("/");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error while  sending data", error);
      alert("Failed to send data");
    }
  };

  return (
    <div>
      <div className="contact-us-container">
        <div className="ui stackable two column grid container-box">
          <div className="column contact-entry-left">
            <div className="contact-entry-left-header">Send us a message</div>
            <form onSubmit={handleSubmit}>
              <div className="ui transparent input contact-input">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="contact-input-type"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="ui transparent input contact-input">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="contact-input-type"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="ui transparent input contact-input">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="contact-input-type"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="ui form">
                <div className="field send-message">
                  <label className="message-me">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <button className="ui inverted white basic button contact-us-submission">
                Submit
              </button>
            </form>
          </div>

          <div className="column contact-entry-right">
            <div className="contact-entry-right-header">Contact Us</div>
            <div className="contact-entry-right-message">
              We're open for suggestions or just to have a chat
            </div>

            <div className="customer-support">
              <div className="phone">
                <FaPhone /> <b>Phone:</b> +XX XXXXXXXXXX
              </div>
              <div className="email">
                <MdEmail /> <b>Email:</b>adityat1531@gmail.com
              </div>
              <div className="website">
                <SlGlobe /> <b>Website:</b>https://www.figma.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
