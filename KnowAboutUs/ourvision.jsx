import React from "react";
import "./ourvision.css";
import { Link } from "react-router-dom";

const OurVision = ({ profiles }) => {
  return (
    <div>
      <div className="vision-header">
        <div className="our-vision">Know About Us</div>
      </div>
      <div className="our-vision-box">
        <div className="our-vision-box-left">
          <img
            src="https://img.freepik.com/premium-photo/construction-worker-flat-illustration_884630-8601.jpg"
            alt="vision-image"
          />
        </div>
        <div className="our-vision-box-right">
          <div className="header-content">
            <div className="our-vision-box-right-header">Our Vision</div>
            <div className="our-vision-box-right-content">
              <p>
                At BuildIn, our mission is to transform the construction
                industry by providing a comprehensive platform that connects
                skilled professionals—including electricians, plumbers, marble
                workers, masons, contractors, architects, and civil
                engineers—with consistent job opportunities. We aim to address
                the industry's challenges by offering Material Master, an
                e-commerce platform for construction materials that ensures a
                steady flow of work and reliable income for these workers. Our
                goal is to bridge the gap between service providers and clients,
                fostering a transparent, efficient, and sustainable employment
                ecosystem. By enhancing industry standards and empowering
                professionals, we strive to create a dynamic, robust
                construction community that supports long-term growth and
                success for all stakeholders involved
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="goals">
        <div className="our-goals">
          <div className="our-goals-header">Our Goals</div>
          <div className="our-goals-content">
            <p>
              BuildIn aims to revolutionize the construction industry by
              providing a seamless platform for connecting skilled professionals
              with job opportunities. Our goal is to ensure steady work and
              reliable income for workers, enhancing industry standards.
            </p>

            <p>
              Our goal at BuildIn is to create a comprehensive ecosystem where
              construction professionals—such as electricians, plumbers, and
              architects—can find consistent job opportunities and access
              essential materials through our e-commerce platform. We strive to
              foster transparency, efficiency, and sustainable growth in the
              industry.
            </p>
          </div>
        </div>
      </div>

      <div className="our-project-box">
        <div className="our-project-header">Our Projects</div>
        <div className="our-project">
          <div className="our-project-left">
            <img
              src="https://img.freepik.com/premium-photo/labor-day-usa-labor-day-celebration-happy-labor-day-3d-international-labor-day_582688-1026.jpg"
              alt="project-image"
            />
          </div>
          <div className="our-project-right">
            <div className="project-right-box">
              <p>
                At BuildIn, our projects encompass a wide range of residential
                and commercial construction ventures. We pride ourselves on
                delivering exceptional quality through detailed planning and
                execution. Whether it's crafting innovative homes or developing
                complex commercial spaces, our dedication to excellence ensures
                that every project meets the highest standards and exceeds
                client expectations.
                <div>
                  <button>
                    <Link to="/projectpage">
                      <div className="btn-projects">Our Projects</div>
                    </Link>
                  </button>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="core-team-box">
        <div className="meet-us">Meet Our Core Teams</div>
        <div className="core-team-members">
          {profiles.map((profile, index) => (
            <div key={index} className="profile-card">
              <img src={profile.imageLink} alt={profile.name} />
              <div className="about-core-members">
                <h1>{profile.name}</h1>
                <p>
                  <b>{profile.profile}</b>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurVision;
