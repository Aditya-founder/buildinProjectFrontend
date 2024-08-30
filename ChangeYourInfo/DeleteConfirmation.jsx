import React from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../../Auth";
import "./deleteConfirmation.css";

const DeleteConfirmation = () => {
  const navigate = useNavigate();

  const onDeleteConfirm = async (confirm) => {
    console.log("confirm karlo", confirm);
    if (confirm) {
      try {
        const data = await Auth.deletePassword();

        console.log("confirm data", data);

        alert("Your account has been deleted successfully.");
        navigate("/");
      } catch (error) {
        alert(
          "An error occurred while deleting your account. Please try again."
        );
      }
    } else {
      alert("Thank you for being a continued partner with us.");
      navigate("/");
    }
  };

  return (
    <div className="delete-confirmation-container">
      <p className="delete-confirmation-text">
        Are you sure you want to delete your ID?
      </p>
      <div className="delete-confirmation-buttons">
        <button
          className="delete-confirmation-button delete-confirmation-yes"
          onClick={() => onDeleteConfirm(true)}
        >
          Yes
        </button>
        <button
          className="delete-confirmation-button delete-confirmation-no"
          onClick={() => onDeleteConfirm(false)}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
