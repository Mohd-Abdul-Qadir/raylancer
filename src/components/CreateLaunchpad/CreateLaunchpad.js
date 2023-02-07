import React from "react";
import { FiPlus } from "react-icons/fi";
import "./CreateLaunchpad.scss";

const CreateLaunchpad = () => {
  return (
    <div className="create-launchpad-container">
      <div className="main-heading-section">
        <span>The Launchpad</span>
        <span>Protocol For Everyone!</span>
      </div>
      <div className="sub-section">
        <div className="action-item">
          <div className="icon-parent">
            <FiPlus
              color="white"
              size={10}
              style={{ background: "#f20cec", borderRadius: "50%", padding: 4 }}
            />
          </div>
          <span>Create Launchpad</span>
        </div>
        <p>
          Tinapad Helps everyone to create their own tokens and token sales in
          few seconds. Tokens Created on Pinksale will be varified and published
          on explorer websties.
        </p>
      </div>
    </div>
  );
};

export default CreateLaunchpad;
