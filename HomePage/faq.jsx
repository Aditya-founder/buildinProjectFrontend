import React, { useState } from "react";
import "./faq.css";
import { Link } from "react-router-dom";

const faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What does the site provide?",
      answer:
        "The site provides a variety of services and products tailored to your needs.",
    },
    {
      question: "Can I get a job?",
      answer:
        "Yes, you can apply for jobs through our site by following the application process.",
    },
    {
      question: "How does it work?",
      answer:
        "The site works by connecting users with various services and products through an easy-to-use interface.",
    },
    {
      question: "How do I hire?",
      answer:
        "You can hire professionals by browsing our directory and selecting the one that fits your requirements.",
    },
  ];

  return (
    <div>
      <div className="frequently-asked">
        <div className="faq-header">Frequently Asked Questions</div>
        <div className="faq-quotes">
          these are the questions we hear more often
        </div>
        <div className="faq-questions-list">
          <div className="faq-left">
            <ul>
              {questions.map((item, index) => (
                <li key={index}>
                  <div>
                    <p>{item.question}</p>
                    <button className="add" onClick={() => toggleAnswer(index)}>
                      {activeIndex === index ? "-" : "+"}
                    </button>
                  </div>
                  <div
                    className={`answer ${activeIndex === index ? "show" : ""}`}
                  >
                    {item.answer}
                  </div>
                  <div className="ui section divider"></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="faq-right">
            <div className="faq-right-centre">
              <div className="if-not-get">
                <div>Don't Find The</div>
                <div>Answer You Need ?</div>
              </div>
              <div className="message-us">
                <p>
                  That's okay. Just drop a message and we will get back to you
                  ASAP
                </p>
              </div>
              <button className="contact-us-btn">
                <Link to="/contactus">
                  <div className="contact-us-script">Contact</div>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default faq;
