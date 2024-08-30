import React from "react";
import "./companycard.css";
import { Link } from "react-router-dom";

const CompanyCard = ({ companiesData, errorMessage }) => {
  // Display an error message if provided
  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  // Check if companiesData is empty or not
  if (!companiesData || companiesData.length === 0) {
    return <p>No companies available.</p>;
  }

  return (
    <div>
      <div className="companies">
        {companiesData.map((company, index) => (
          <div key={index} className="company">
            <img src={company.imageLink} alt={`${company.companyName} logo`} />
            <div className="content-part">
              <Link to={`/companyinfo/${company._id}`}>
                <h3>{company.companyName}</h3>
              </Link>
              <p>{company.description}</p>
              <p>
                <strong>Type:</strong> {company.category}
              </p>
              <p>
                <strong>Rating:</strong> {company.rating}
              </p>
              <p>
                <strong>Pincode:</strong> {company.pincode}
              </p>
              <p>
                <strong>Address:</strong> {company.addressline1}{" "}
                {company.addressline2}
              </p>
              <p>{company.tellUsAboutYourCompany}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyCard;
