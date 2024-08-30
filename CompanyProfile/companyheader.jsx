import React, { useState, useEffect } from "react";
import "./companyheader.css";
import Auth from "../../Auth";
import { IoLocation } from "react-icons/io5";
import CompanyCard from "../../component/CompanyProfile/companycard";

const CompanyHeader = ({ professionals }) => {
  // State to manage input values
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [companiesData, setCompaniesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  // Handler for search button click
  const handleSearchClick = () => {
    console.log("Search Term:", searchTerm);
  };

  // Handler for location button click
  const handleLocationClick = () => {
    console.log("Location:", location);
  };

  // Fetch all companies initially
  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true);
      setErrorMessage(""); // Reset error message before fetching
      try {
        const response = await Auth.getAllCompanies();
        const companiesData = response.requireCompanies;
        const uploadsResponse = await Auth.getProfilePhoto();
        const uploadsData = uploadsResponse.data;

        const baseImageUrl = "http://127.0.0.1:4000/profileImage/";
        const companiesWithImages = companiesData.map((company) => {
          const upload = uploadsData.find((item) => item._id === company._id);
          const imageLink = upload
            ? `${baseImageUrl}${upload.image}`
            : "default-image-url.jpg";
          return {
            ...company,
            imageLink,
          };
        });
        setCompaniesData(companiesWithImages);
      } catch (error) {
        console.error("Error fetching companies:", error);
        setErrorMessage("Failed to load companies.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  // Function to fetch companies based on professional category
  const fetchCompaniesByCategory = async (category) => {
    setLoading(true);
    setErrorMessage(""); // Reset error message before fetching
    try {
      const response = await Auth.getSpecificCompanies(category);
      const uploadsResponse = await Auth.getProfilePhoto();
      const uploadsData = uploadsResponse.data;

      const baseImageUrl = "http://127.0.0.1:4000/profileImage/";
      const companiesWithImages = response.map((company) => {
        const upload = uploadsData.find((item) => item._id === company._id);
        const imageLink = upload
          ? `${baseImageUrl}${upload.image}`
          : "default-image-url.jpg";
        return {
          ...company,
          imageLink,
        };
      });

      if (companiesWithImages.length === 0) {
        setErrorMessage("No such data exists."); // Set error message if no companies are found
        setCompaniesData([]);
      } else {
        setCompaniesData(companiesWithImages);
      }
    } catch (error) {
      console.error("Error fetching companies:", error);
      setErrorMessage("Error fetching companies data.");
      setCompaniesData([]);
    } finally {
      setLoading(false);
    }
  };

  // Handler for professional card click
  const handleProfessionalClick = (professional) => {
    fetchCompaniesByCategory(professional.category);
  };

  return (
    <div>
      <div className="company-header">
        <form className="finder" onSubmit={(e) => e.preventDefault()}>
          <div className="ui big icon input types">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i
              className="circular search link icon"
              onClick={handleSearchClick}
            ></i>
          </div>
          <div className="ui big action input locator">
            <input
              type="text"
              placeholder="Enter Location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button
              className="ui big icon button locator"
              onClick={handleLocationClick}
            >
              <i>
                <IoLocation className="io-location" />
              </i>
            </button>
          </div>
        </form>
        <div className="company-advertisement">
          <div className="company-advertisement-left">
            <section className="slider_container">
              <section className="slider">
                <div className="slide one">
                  <img
                    src="https://srist.in/wp-content/uploads/2022/05/architecture-srist.webp"
                    alt="one"
                  />
                  <span className="caption"> slide one </span>
                </div>
                <div className="slide two">
                  <img
                    src="https://t3.ftcdn.net/jpg/05/58/56/56/360_F_558565658_R6zFHZqwx5I6BzsyrAd8HCRdXpmtvWmY.jpg"
                    alt="two"
                  />
                  <span className="caption"> slide two </span>
                </div>
                <div className="slide three">
                  <img
                    src="https://foyr.com/learn/wp-content/uploads/2018/12/6.jpg"
                    alt="three"
                  />
                  <span className="caption"> slide three </span>
                </div>
                <div className="slide four">
                  <img
                    src="https://media.istockphoto.com/id/1198989663/vector/craftsmen-painter.jpg?s=612x612&w=0&k=20&c=dOX_1zpijOXopOXFXGzM9_Q8NqMHjqA_woanlwrJxxM="
                    alt="four"
                  />
                  <span className="caption"> slide four </span>
                </div>
                <div className="slide five">
                  <img
                    src="https://img.freepik.com/premium-photo/technician-plumber-using-wrench-repair-water-pipe-sink_101448-4182.jpg"
                    alt="five"
                  />
                  <span className="caption"> slide five </span>
                </div>
              </section>
            </section>
          </div>

          <div className="company-advertisement-right">
            {professionals.map((professional, index) => (
              <div
                key={index}
                className="professional-item"
                style={{ backgroundImage: `url(${professional.imageLink})` }}
                onClick={() => handleProfessionalClick(professional)}
              >
                <p className="professional-name">{professional.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CompanyCard companiesData={companiesData} errorMessage={errorMessage} />
    </div>
  );
};

export default CompanyHeader;
