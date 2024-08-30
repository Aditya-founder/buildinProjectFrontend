import React, { useState } from "react";
import "./upload.css";
import Auth from "../../Auth";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [numFields, setNumFields] = useState(0);
  const [inputValues, setInputValues] = useState([]);
  const [numFields2, setNumFields2] = useState(0);
  const [inputValues2, setInputValues2] = useState([]);
  const [aboutYourself, setAboutYourself] = useState("");
  const [messageFromYourSide, setMessageFromYourSide] = useState("");
  const [image, setImage] = useState();

  const handleNumFieldsChange = (e) => {
    const num = parseInt(e.target.value, 10) || 0;
    setNumFields(num);
    setInputValues(Array(num).fill(""));
  };

  const handleInputChange = (index, value) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
  };

  const handleNumFieldsChange2 = (e) => {
    const num = parseInt(e.target.value, 10) || 0;
    setNumFields2(num);
    setInputValues2(Array(num).fill(""));
  };

  const handleInputChange2 = (index, value) => {
    const newValues = [...inputValues2];
    newValues[index] = value;
    setInputValues2(newValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Number of Companies:", inputValues);
    console.log("About Yourself:", aboutYourself);
    console.log("Message From Your Side:", messageFromYourSide);

    // You can add your API calls or further processing here
    try {
      const response = await Auth.uploadAboutMessageWorkedWith(
        aboutYourself,
        messageFromYourSide,
        inputValues
      );
      console.log("Response from server: ", response);

      if (response.data.success) {
        console.log("Your project entry became successful");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error while filling your project links", error);
      alert("Failed to submit data");
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    try {
      const response = await Auth.uploadProjectLinks(inputValues2);
      console.log("Response from server: ", response);

      if (response.data.success) {
        console.log("Your project entry became successful");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error while filling your project links", error);
      alert("Failed to submit data");
    }
  };

  const submitImage = async (e) => {
    e.preventDefault();

    console.log("Title:", title);
    console.log("File:", file);

    try {
      const response = await Auth.uploadFiles(title, file);
      if (response.data.success) {
        console.log("file uploaded success");
        alert("file uploaded successfully");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error while uploading file", error);
      alert("Failed to upload ");
    }
  };

  const submitActualImage = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.set("image", image);
    console.log("image", formData);

    try {
      const response = await Auth.uploadProfile(formData);
      if (response.data && response.data.success) {
        console.log("Image uploaded successfully");
        alert("Image uploaded successfully");
      } else {
        alert(response.data?.message || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Error while uploading file", error);
      alert("Failed to upload");
    }
  };

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <div className="upload-engineer">
        <div className="upload-engineer-form">
          <div className="upload-engineer-form-container">
            <form className="ui placeholder segment" onSubmit={submitImage}>
              <div className="ui icon header">
                <i className="pdf file outline icon"></i>
                Upload Your Resume Here
              </div>
              <input
                type="text"
                className="resume-text-class"
                id="title"
                placeholder="Title"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="file"
                className="resume-upload-class"
                id="file"
                accept="application/pdf"
                required
                onChange={(e) => setFile(e.target.files[0])}
              />
              <button className="ui primary button">Add Resume</button>
            </form>
            <form className="ui placeholder segment">
              <div className="ui icon header">
                <i className="user icon"></i>
                Upload Your Profile Photo Here
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={onInputChange}
                name="image"
              />

              <button
                className="ui primary button"
                onClick={(e) => submitActualImage(e)}
                type="submit"
              >
                Add Profile photo
              </button>
            </form>
            <form className="ui placeholder segment">
              <h2>UPLOAD YOUR PROJECTS LINKS</h2>
              <div style={{ marginBottom: "20px" }}>
                <label>Number of Projects: </label>
                <input
                  type="number"
                  value={numFields2}
                  onChange={handleNumFieldsChange2}
                  placeholder="Enter the number of inputs"
                  style={{ marginLeft: "10px", padding: "5px" }}
                />
              </div>

              {inputValues2.map((value, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  <label>Project {index + 1}: </label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleInputChange2(index, e.target.value)}
                    placeholder={`Project name ${index + 1}`}
                    style={{ marginLeft: "10px", padding: "5px" }}
                  />
                </div>
              ))}

              <button
                onClick={handleSubmit2}
                style={{ padding: "10px 15px", marginTop: "20px" }}
              >
                Submit
              </button>
            </form>
          </div>
          <form className="upload-engineer-form-container">
            <div className="ui form">
              <div className="field">
                <label>About Yourself</label>
                <textarea
                  value={aboutYourself}
                  onChange={(e) => setAboutYourself(e.target.value)}
                ></textarea>
              </div>
              <div className="field">
                <label>Message From Your Side</label>
                <textarea
                  rows="2"
                  value={messageFromYourSide}
                  onChange={(e) => setMessageFromYourSide(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div style={{ padding: "20px" }}>
              <h2>NUMBER OF COMPANIES YOU HAVE WORKED WITH</h2>
              <div style={{ marginBottom: "20px" }}>
                <label>Number of Companies: </label>
                <input
                  type="number"
                  value={numFields}
                  onChange={handleNumFieldsChange}
                  placeholder="Enter the number of inputs"
                  style={{ marginLeft: "10px", padding: "5px" }}
                />
              </div>

              {inputValues.map((value, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  <label>Company {index + 1}: </label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    placeholder={`Company name ${index + 1}`}
                    style={{ marginLeft: "10px", padding: "5px" }}
                  />
                </div>
              ))}

              <button
                onClick={handleSubmit}
                style={{ padding: "10px 15px", marginTop: "20px" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
