import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./architectrequire.css";

const ArchitectRequire = () => {
  const [selectedService, setSelectedService] = useState("");
  const navigate = useNavigate();

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleSubmit = () => {
    switch (selectedService) {
      case "new-construction":
        navigate("/nav-1");
        break;
      case "addition":
        navigate("/nav-2");
        break;
      case "elevation":
        navigate("/nav-1");
        break;
      default:
        break;
    }
  };

  return (
    <div className="architect-require-form">
      <div className="fill-arch-form">
        <div className="fill-arch-form-header">ARCHITECT FORM</div>
        <div className="ui form">
          <div className="grouped fields">
            <label>Which services do you require?</label>
            <div className="field require-feild">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="service"
                  value="new-construction"
                  checked={selectedService === "new-construction"}
                  onChange={handleServiceChange}
                />
                <label>New property - Plans for new construction</label>
              </div>
            </div>
            <div className="field require-feild">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="service"
                  value="addition"
                  checked={selectedService === "addition"}
                  onChange={handleServiceChange}
                />
                <label>Existing property</label>
              </div>
            </div>
            <div className="field require-feild">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="service"
                  value="elevation"
                  checked={selectedService === "elevation"}
                  onChange={handleServiceChange}
                />
                <label>Elevation designs</label>
              </div>
            </div>
            <div className="ui input focus">
              <input type="text" placeholder="If any other" />
            </div>
          </div>
          <button className="ui button" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArchitectRequire;
