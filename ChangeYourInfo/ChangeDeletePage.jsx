import React, { useState } from "react";
import EmailPasswordForm from "./EmailPasswordForm";
import ChangeDeleteOptions from "./ChangeDeleteOptions";
import ChangePasswordForm from "./ChangePasswordForm";
import DeleteConfirmation from "./DeleteConfirmation";
import "./changeDeletePage.css";

const ChangeDeletePage = () => {
  const [stage, setStage] = useState("emailPasswordForm"); // Initial stage
  const [email, setEmail] = useState("");

  const handleEmailPasswordSubmit = (formData) => {
    // Handle backend verification here
    // If successful, proceed to the next stage
    setEmail(formData.email);
    setStage("changeDeleteOptions");
  };

  const handleOptionSelect = (option) => {
    if (option === "changePassword") {
      setStage("changePasswordForm");
    } else if (option === "deleteAccount") {
      setStage("deleteConfirmation");
    }
  };

  const handleChangePassword = (newPassword) => {
    // Handle password change logic
    alert("Password changed successfully!");
  };

  const handleDeleteConfirm = (confirm) => {
    if (confirm) {
      // Handle account deletion logic
      alert("Your account has been deleted.");
    } else {
      setStage("changeDeleteOptions");
    }
  };

  return (
    <div>
      {stage === "emailPasswordForm" && (
        <EmailPasswordForm onSubmit={handleEmailPasswordSubmit} />
      )}
      {stage === "changeDeleteOptions" && (
        <ChangeDeleteOptions onOptionSelect={handleOptionSelect} />
      )}
      {stage === "changePasswordForm" && (
        <ChangePasswordForm onChangePassword={handleChangePassword} />
      )}
      {stage === "deleteConfirmation" && (
        <DeleteConfirmation onDeleteConfirm={handleDeleteConfirm} />
      )}
    </div>
  );
};

export default ChangeDeletePage;
