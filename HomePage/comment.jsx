import React from "react";
import "./comment.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Comment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/explore-further")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <div className="ui section divider"></div>
      <div className="check-more">Explore Further</div>
      <div className="comment-section">
        {data.map((item, index) => (
          <div key={index} className="comment-card">
            <div className="comment-card-left">
              <img
                src={item.imageLink}
                alt={item.heading}
                className="comment-image"
              />
            </div>
            <div className="comment-card-right">
              <Link to={`${item.link}`}>
                <h3 className="comment-heading">{item.heading}</h3>
              </Link>

              <p className="comment-content">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
