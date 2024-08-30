import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./workType.css";

const WorkType = () => {
  const [selectedWorkType, setSelectedWorkType] = useState("");
  const navigate = useNavigate();

  const handleWorkTypeChange = (event) => {
    setSelectedWorkType(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission based on selectedWorkType
    switch (selectedWorkType) {
      case "fuse-box":
        navigate("/fuse-box");
        break;
      case "lighting-install":
        navigate("/lighting-install");
        break;
      case "re-wiring":
        navigate("/re-wiring");
        break;
      case "switch-install":
        navigate("/switch-outlet-install");
        break;
      case "switch-repair":
        navigate("/switch-outlet-install");
        break;
      case "appliance-install":
        navigate("/appliance");
        break;
      case "appliance-repair":
        navigate("/appliance");
        break;
      default:
        break;
    }
  };

  return (
    <div className="work-type-form-container">
      <div className="work-type-form">
        <h2>What kind of work do you need doing?</h2>
        <div className="ui form">
          <div className="grouped fields">
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="work-type"
                  value="fuse-box"
                  checked={selectedWorkType === "fuse-box"}
                  onChange={handleWorkTypeChange}
                />
                <label>Fuse box or circuit breaker work</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="work-type"
                  value="lighting-install"
                  checked={selectedWorkType === "lighting-install"}
                  onChange={handleWorkTypeChange}
                />
                <label>Lighting install</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="work-type"
                  value="re-wiring"
                  checked={selectedWorkType === "re-wiring"}
                  onChange={handleWorkTypeChange}
                />
                <label>Re-wiring</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="work-type"
                  value="switch-install"
                  checked={selectedWorkType === "switch-install"}
                  onChange={handleWorkTypeChange}
                />
                <label>Switch or outlet install</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="work-type"
                  value="switch-repair"
                  checked={selectedWorkType === "switch-repair"}
                  onChange={handleWorkTypeChange}
                />
                <label>Switch or outlet repair</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="work-type"
                  value="appliance-install"
                  checked={selectedWorkType === "appliance-install"}
                  onChange={handleWorkTypeChange}
                />
                <label>Appliance installation</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="work-type"
                  value="appliance-repair"
                  checked={selectedWorkType === "appliance-repair"}
                  onChange={handleWorkTypeChange}
                />
                <label>Appliance repair</label>
              </div>
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

export default WorkType;
