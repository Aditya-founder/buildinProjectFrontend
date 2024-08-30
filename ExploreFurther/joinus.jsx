import React from "react";
import "./joinus.css";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { GiGrowth } from "react-icons/gi";
import { GiTrophy } from "react-icons/gi";

const joinus = ({ commentdata }) => {
  return (
    <div>
      <div className="select-your-domain">
        <div className="select-your-domain-left">
          <div className="domain-header">
            Join Now And Start Growing Your Business
          </div>

          <div className="our-domains">
            <div className="our-domain-box">
              <Link to="/engineerfillingform">Engineers</Link>
            </div>
            <div className="our-domain-box">
              <Link to="/companyfillingform">Company </Link>
            </div>
            <div className="our-domain-box">
              <Link to="/workerthekedaarfillingform">
                <div>Thekedaar</div>
                <div>or</div>
                <div>Worker</div>
              </Link>
            </div>
            <div className="our-domain-box">
              <Link to="/shopsfillingform">Shops</Link>
            </div>
          </div>
        </div>
        <div className="select-your-domain-right">
          <div className="company-domain-name">
            <span>Build</span>
            <span className="in-name">In</span>
          </div>
          <div className="trust-quote">Where Trust Lies</div>
        </div>
      </div>
      <div className="user-satisfaction">
        <div className="user-satisfaction-boxes">
          <div className="user-satisfaction-numbers">500+</div>
          <div className="user-satisfaction-type">Success</div>
          <div className="user-satisfaction-kind">Stories</div>
        </div>
        <div className="user-satisfaction-boxes">
          <div className="user-satisfaction-numbers">1000+</div>
          <div className="user-satisfaction-type">Valuable</div>
          <div className="user-satisfaction-kind">Connections</div>
        </div>
        <div className="user-satisfaction-boxes">
          <div className="user-satisfaction-numbers">2000+</div>
          <div className="user-satisfaction-type">Trusted</div>
          <div className="user-satisfaction-kind">Workers</div>
        </div>
      </div>
      <div className="our-joinings">
        <div className="our-joinings-left">
          <div className="why-join-us">WHY JOIN US</div>
          <div className="why-join-us-content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt,
              totam odio ab voluptatibus assumenda at. Dicta doloribus dolor
              corporis animi ea, quidem earum repudiandae similique, voluptatem
              error cumque. Natus mollitia aperiam soluta magnam, deserunt qui!
              Rem, eligendi dolores? Commodi iure tempora dolore, accusamus
              officia ea non dignissimos minima labore debitis laboriosam, nisi
              qui. Sit, tempora alias. Architecto, ipsa blanditiis! Fugit quia
              quod eos impedit quam ipsum. Aut doloribus dolorum ducimus quo!
              Autem pariatur eaque ipsam ullam sit consequuntur ratione nobis ea
              delectus voluptatum excepturi, iste porro impedit voluptates
              distinctio quos voluptate cumque, nam architecto facilis?
              Voluptate placeat eligendi accusamus neque illum dolorem nobis
              nostrum consequuntur dignissimos eveniet, totam nemo eius expedita
              nesciunt odit repellat, minus cumque fugit ullam illo facere dolor
              adipisci? Obcaecati, facere nihil quod commodi at vitae incidunt
              consequuntur illo assumenda praesentium, nisi illum quibusdam quo
              ullam maiores officiis ex eligendi, molestias itaque sit
              architecto inventore debitis accusamus! Accusantium excepturi
              mollitia exercitationem, voluptatibus atque quisquam voluptatum
              provident natus, vitae quam, eligendi iusto debitis nemo libero
              tenetur molestias quae obcaecati aliquid autem. Maxime nostrum
              eius quia ullam doloremque at debitis nisi nulla quasi ex, id
              asperiores magnam cupiditate, magni eveniet voluptatibus
              voluptates error itaque rem placeat quaerat dolorum? Quidem?
            </p>
          </div>
        </div>
        <div className="our-joinings-right">
          <div className="our-domain-box-why-join-us">
            <MdDashboard className="reasons-to-join-us" />
            PERSONALIZED DASHBOARD
          </div>
          <div className="our-domain-box-why-join-us">
            <RiAdvertisementFill className="reasons-to-join-us" />
            GREAT ADVERTISEMENT
          </div>
          <div className="our-domain-box-why-join-us">
            <GiGrowth className="reasons-to-join-us" />
            TREMENDOUS GROWTH RATE
          </div>
          <div className="our-domain-box-why-join-us">
            <GiTrophy className="reasons-to-join-us" />
            AWARDS AND INCENTIVES
          </div>
        </div>
      </div>
      <div className="customer-success-stories">
        <div className="customer-success-stories-header">
          <div className="customer-header">CUSTOMER SUCCESS STORIES</div>
          <div className="what-does-they-say-about-us">
            What does they say about us
          </div>
        </div>
        <div className="customers-collection">
          <div className="customers-comment">
            {commentdata.map((item, index) => (
              <div key={index} className="success-card">
                <img
                  src={item.image}
                  alt={item.heading}
                  className="success-card-image"
                />
                <div className="success-card-heading">{item.heading}</div>
                <p className="success-card-comment">{item.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default joinus;
