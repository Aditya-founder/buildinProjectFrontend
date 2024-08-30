import React from "react";
import "./typecards.css";
import { Link } from "react-router-dom";

const TypeCards = ({ workTypes }) => {
  return (
    <div>
      <div className="what-we-serve">What we serve</div>
      <div className="details-what-we-serve">
        <p>
          At BuildIn, our mission is to revolutionize the construction and
          renovation industry by offering a platform that seamlessly connects
          users with skilled tradespeople while maintaining full transparency
          and cost-effectiveness. We serve a diverse range of users, including
          homeowners, real estate developers, and businesses, by providing a
          free, user-friendly platform where they can directly access and engage
          with a wide array of professionals such as painters, plumbers,
          electricians, and builders. Our platform eliminates the traditional
          service fees and hidden costs associated with other services, allowing
          users to negotiate and set prices directly with workers. Additionally,
          we offer value-added features like a personalized dashboard, ensuring
          users receive regular updates and tailored information. By focusing on
          a subscription-based revenue model for our partners, we keep our
          services accessible to all, fostering a transparent and equitable
          environment for both users and service providers. Our commitment to
          understanding the challenges faced by both users and partners at the
          grassroots level allows us to continually enhance our platform, making
          it a reliable and preferred choice in the industry.
        </p>
        <p>
          BuildIn is dedicated to transforming the construction and renovation
          landscape by connecting users with skilled tradespeople through an
          accessible, free platform. Our service caters to homeowners,
          businesses, and real estate developers by allowing them to find and
          interact directly with professionals such as plumbers, electricians,
          and builders without hidden fees. Users can negotiate prices directly
          with workers, enhancing transparency and control over costs. With a
          subscription-based revenue model for our partners, we ensure that our
          platform remains cost-effective for users. We also provide
          personalized dashboards and regular updates, improving user experience
          and engagement. By addressing industry challenges and continuously
          refining our services, BuilIn stands out as a reliable and
          user-centric solution.
        </p>
      </div>
      <div className="check-what-we-serve">Our different serving services</div>
      <div className="type-cards-container">
        {workTypes.map((workType, index) => (
          <div className="type-card" key={index}>
            <img
              src={workType.imageLink}
              alt={workType.workType}
              className="type-card-image"
            />
            <div className="type-card-content">
              <div className="type-card-title">{workType.workType}</div>
              <p className="type-card-description">{workType.description}</p>
            </div>
            <Link to={`${workType.pageLink}`}>
              <button className="fits-box">Click Here</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeCards;
