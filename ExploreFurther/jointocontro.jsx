import React from "react";
import "./jointocontro.css";
import { BsClipboardCheck } from "react-icons/bs";

const jointocontro = ({
  companyLogos,
  plans,
  plansdata,
  extraPlansData,
  testimonials,
}) => {
  return (
    <div>
      <div className="discover-the-people-container">
        <div className="discover-box">
          <div className="discover-box-left">
            <div className="discover-benefits">
              <ol>
                <ul>
                  <BsClipboardCheck />
                  Feature Profile
                </ul>
                <ul>
                  <BsClipboardCheck />
                  Boost Revenue
                </ul>
                <ul>
                  <BsClipboardCheck />
                  Customer Revenue
                </ul>
                <ul>+ and more</ul>
              </ol>
            </div>
          </div>
          <div className="discover-box-right">
            <div className="discover-box-right-header">
              <div>Discover People </div>
              <div> Who Needs</div>
              <div> You</div>
            </div>
            <button className="ui primary button grow">
              Join Now And Grow
            </button>
          </div>
        </div>
      </div>

      <div className="our-partners">
        <div className="our-partners-adv">
          <div className="total-partners">
            250+ partners have joined with BuildIn
          </div>
          <div className="total-partners">to grow their business</div>
          <div className="partners-button">
            <button className="ui red basic button">Engineers</button>
            <button className="ui red basic button">Contractors</button>
            <button className="ui red basic button">Interior</button>
            <button className="ui red basic button">Others</button>
          </div>
          <div className="our-partners-adv-slider">
            {companyLogos.map((company, index) => (
              <div key={index} className="logo-container">
                <img
                  src={company.imageLink}
                  alt={company.name}
                  className="company-logo"
                />
              </div>
            ))}
          </div>
          <button className="ui secondary  basic button view-all-partners">
            View All
          </button>
        </div>

        <div className="ui section divider"></div>
        <div className="pick-a-plan">Pick a Plan for your business</div>
        <div className="plan-cards">
          {plans.map((plan, index) => (
            <div className="plan-card" key={index}>
              <h2>{plan.name}</h2>
              <p>
                <strong>Validity:</strong> {plan.validity}
              </p>
              <p>
                <strong>Cost:</strong> {plan.cost}
              </p>
              <p>{plan.description}</p>
              <a href={plan.link} className="learn-more">
                Learn More
              </a>
              <button className="book-now">Book Now</button>
              <button className="get-demo">Get a Demo</button>
            </div>
          ))}
        </div>
        <span className="know-all-plans">
          Want to know more plans :- <a src="/example.com">Click here</a>
        </span>
        <div className="plan-details">PLAN DETAILS</div>
        <div className="know-now-plans">
          <table className="full-width-table">
            <tr>
              <td></td>
              <th className="plans-type">Basic</th>
              <th className="plans-type">Standard</th>
              <th className="plans-type">Premium</th>
            </tr>
            <tr>
              <td>Duration Available</td>
              <th>6 Months</th>
              <th>6 Months</th>
              <th>6 Months</th>
            </tr>
            {plansdata.map((item, index) => (
              <tr key={index}>
                <td>{item.data1}</td>
                <td className="centring-check">
                  {item.data2 === "right" ? "✓" : "✗"}
                </td>
                <td className="centring-check">
                  {item.data3 === "right" ? "✓" : "✗"}
                </td>
                <td className="centring-check">
                  {item.data4 === "right" ? "✓" : "✗"}
                </td>
              </tr>
            ))}
          </table>
          <div className="benefits-client">Adds To Boost Visibility</div>

          <table className="full-width-table">
            {extraPlansData.map((item, index) => (
              <tr key={index}>
                <td>{item.data1}</td>
                <td className="centring-check">
                  {item.data2 === "right" ? "✓" : "✗"}
                </td>
                <td className="centring-check">
                  {item.data3 === "right" ? "✓" : "✗"}
                </td>
                <td className="centring-check">
                  {item.data4 === "right" ? "✓" : "✗"}
                </td>
              </tr>
            ))}
          </table>
          <div className="benefits-client">Benefits of client Requirement</div>

          <table className="full-width-table">
            {extraPlansData.map((item, index) => (
              <tr key={index}>
                <td>{item.data1}</td>
                <td className="centring-check">
                  {item.data2 === "right" ? "✓" : "✗"}
                </td>
                <td className="centring-check">
                  {item.data3 === "right" ? "✓" : "✗"}
                </td>
                <td className="centring-check">
                  {item.data4 === "right" ? "✓" : "✗"}
                </td>
              </tr>
            ))}
          </table>
          <span className="know-all-plans-benefits">
            Want to know more :- <a src="/example.com">Click here</a>
          </span>
        </div>
      </div>

      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <div className="testimonial-content">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-position">{testimonial.position}</p>
              <p className="testimonial-text">{testimonial.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default jointocontro;
