import React, { useContext } from "react";
import axiosGate from "./axiosGate";
import { state } from "../../Service";
import { AxiosWrapperContext } from "./AxiosWrapper";

const index = () => {
  //#region middleware
  // const { apiPost } = useContext(AxiosWrapperContext);

  return {
    otpGET: async (postdata) => {
      console.log(postdata);
      const data = await axiosGate("POST", "/profile/sendotp", postdata);
      return data;
    },
    signIN: async (signUpData) => {
      console.log(signUpData);
      const data = await axiosGate("POST", "/profile/signup", signUpData);
      return data;
    },
    logIN: async (email, password, apiPost) => {
      console.log(email, password);
      const postData = { email, password };
      console.log("going");
      const response = await apiPost("/profile/login-system", {
        ...postData,
      });
      console.log("data ko print karo", response);

      if (response.status && response.data.token) {
        // Store the token in local storage
        localStorage.setItem("authToken", response.data.token);
      }
      return response;
    },
    companyDetailsSubmission: async (companyData) => {
      console.log(companyData);
      const data = await axiosGate("POST", "/reach/companyRouter", companyData);
      return data;
    },
    engineerDetailsSubmission: async (engineerData) => {
      console.log(engineerData);
      const data = await axiosGate(
        "POST",
        "/reach/engineerRouter",
        engineerData
      );
      return data;
    },
    workerThekedaarDetailsSubmission: async (workerThekedaarData) => {
      console.log(workerThekedaarData);
      const data = await axiosGate(
        "POST",
        "/reach/thekedaarRouter",
        workerThekedaarData
      );
      return data;
    },
    contactUsSubmission: async (contactData) => {
      console.log(contactData);
      const data = await axiosGate("POST", "/reach/contact", contactData);
      return data;
    },

    uploadFiles: async (title, file) => {
      const formData = new FormData();
      formData.set("title", title);
      formData.set("file", file);

      console.log("FormData being sent:", formData);

      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      const data = await axiosGate("POST", "/upload-files", formData, config);
      return data;
    },
    uploadImage: async (formData) => {
      console.log("image aa raha hai ki nahi", formData);

      // const formData = new FormData();
      // formData.set("image", image);

      console.log("FormData is being sent ", formData);
      console.log("ho raha hai ki nahi");

      const config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };

      const data = await axiosGate("POST", "/upload-image", formData, config);
      return data;
    },
    uploadProfile: async (formData) => {
      console.log("image aa raha hai ki nahi", formData);

      // const formData = new FormData();
      // formData.set("image", image);

      console.log("FormData is being sent ", formData);
      console.log("ho raha hai ki nahi");

      const config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };

      const data = await axiosGate(
        "POST",
        "/upload-profile-image",
        formData,
        config
      );
      return data;
    },
    getAllArchitect: async () => {
      try {
        const response = await axiosGate("GET", "/cardData/fetchEngineer");
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    uploadProjectLinks: async (projectArray) => {
      console.log("Project array being sent:", projectArray);
      const data = await axiosGate("POST", "/projectLinks/project-links", {
        projectObject: projectArray,
      });
      return data;
    },
    uploadAboutMessageWorkedWith: async (
      about,
      messageFromMySide,
      companiesWorked
    ) => {
      console.log(
        "About , message , companiesWorked:",
        about,
        messageFromMySide,
        companiesWorked
      );
      const data = await axiosGate("POST", "/storage/about", {
        about,
        messageFromMySide,
        companiesWorkedWith: companiesWorked,
      });
      return data;
    },
    uploadCompanyBlogDetails: async (blogData) => {
      console.log(blogData);
      const data = await axiosGate(
        "POST",
        "/reach/fill-company-blog-details",
        blogData
      );
      return data;
    },

    getProfilePhoto: async () => {
      try {
        const response = await axiosGate("GET", "/get-profile-image");
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    getAboutMessageWorkedWith: async (id) => {
      try {
        console.log("console me id ", id);
        const response = await axiosGate(
          "GET",
          `/cardData/getAboutMessageWorkedWith/${id}`
        );
        console.log("ye le tera response", response);
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },

    //#endregion

    //#region
    getEngineerDetailsById: async (id) => {
      try {
        console.log("print karwao id", id);
        const response = await axiosGate(
          "GET",
          `/cardData/getSingleAboutMessageWorkedWith?id=${id}`
        );

        console.log("response data ka data", response.data.findSingleProfile);

        return response.data.findSingleProfile;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },

    //single-company-blog
    getSingleCompanyBlog: async (id) => {
      try {
        console.log("print karwao id", id);
        const response = await axiosGate(
          "GET",
          `/cardData/single-company-blog?id=${id}`
        );

        console.log("response data ka data", response.data.findCompany);

        return response.data.findCompany;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },

    // painters details by id
    getWorkerDetailsById: async (id) => {
      try {
        console.log("Print ID:", id);
        const response = await axiosGate(
          "GET",
          `/cardData/fetchworkerThekedaar?id=${id}`
        );

        console.log(
          "what is your response",
          response.data.requireWorker_Thekedaar
        );

        const workerDetails = response.data.requireWorker_Thekedaar.find(
          (worker) => worker._id === id
        );
        console.log("Worker Details:", workerDetails);

        return workerDetails;
      } catch (error) {
        console.error("Error fetching worker data:", error);
        throw error;
      }
    },

    getSingleWorkerById: async (id) => {
      try {
        console.log("Print ID:", id);
        const response = await axiosGate(
          "GET",
          `/cardData/get-single-worker-wrt-id?id=${id}`
        );

        console.log("what is your response", response);

        return response;
      } catch (error) {
        console.error("Error fetching worker data:", error);
        throw error;
      }
    },

    //#endregion

    //#region
    // contractors
    getAllContractors: async () => {
      try {
        const response = await axiosGate("GET", "/cardData/contractors");
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },

    // Painter
    getAllPainters: async () => {
      try {
        const response = await axiosGate("GET", "/cardData/painters");
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },

    // InteriorDesigner
    getAllInteriorDesigners: async () => {
      try {
        const response = await axiosGate("GET", "/cardData/interiordesigners");
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },

    // plumber
    getAllPlumbers: async () => {
      try {
        const response = await axiosGate("GET", "/cardData/plumbers");
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },

    // Marble Worker
    getAllMarbleWorkers: async () => {
      try {
        const response = await axiosGate("GET", "/cardData/marbleworkers");
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },

    // Mason Worker
    getAllMasonWorkers: async () => {
      try {
        const response = await axiosGate("GET", "/cardData/masonworkers");
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },

    //Electrician
    getAllElectricians: async () => {
      try {
        const response = await axiosGate("GET", "/cardData/electricians");
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },

    getAllCompanies: async () => {
      try {
        const response = await axiosGate("GET", "/cardData/fetchCompanies");
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },

    //#endregion

    //#region
    checkMailAndPassword: async (email, password) => {
      console.log("this is the email:-", email);
      console.log("this is the password:-", password);

      try {
        // Construct the URL with query parameters
        const url = `/profile/check-email-password?email=${encodeURIComponent(
          email
        )}&password=${encodeURIComponent(password)}`;

        // Perform a GET request
        const response = await axiosGate("GET", url);

        console.log("Response from server:", response.data.success);
        return response.data.success;
      } catch (error) {
        console.error("Something error happened", error);
        return { success: false, message: error.message };
      }
    },

    // yaha se sab ka check karna hai
    changePassword: async (newPassword) => {
      console.log(newPassword);
      const data = await axiosGate(
        "POST",
        "/profile/changePassword",
        newPassword
      );
      return data;
    },

    deletePassword: async () => {
      const response = await axiosGate("DELETE", "/profile/deleteAccount");

      // Handle the response structure
      if (response.status) {
        return response.data;
      } else {
        throw new Error(response.message || "Failed to delete account");
      }
    },

    updateAboutOfEngineers: async (aboutData) => {
      console.log("About :", aboutData);
      const data = await axiosGate("POST", "/storage/update-about-section", {
        aboutData,
      });
      return data;
    },
    updateMessageSectionOfEngineers: async (messageData) => {
      console.log("message data :", messageData);
      const data = await axiosGate("POST", "/storage/update-message-section", {
        messageData,
      });
      console.log("what is the data", data);
      return data;
    },
    updateCompanniesIWorkedWith: async (companiesWorkedWith) => {
      console.log("companies WorkedData :", companiesWorkedWith);
      const data = await axiosGate(
        "POST",
        "/storage/update-comapnies-you-worked-with",
        { companiesWorkedWith }
      );
      return data;
    },
    updateEngineerDetailsSubmission: async (formData) => {
      console.log(formData);
      const data = await axiosGate("POST", "/reach/updateEngineerDetails", {
        formData,
      });
      return data;
    },
    dashBoardDatabase: async (address, id, contactNo) => {
      const data = {
        address,
        id,
        contactNo,
      };

      try {
        const response = await axiosGate(
          "POST",
          "/connect/dashboard-request",
          data
        );
        console.log("Response from server:", response.data.success);
        return response.data.success;
      } catch (error) {
        console.error("Error while filling your company details", error);
      }
    },
    getDashboardDataById: async (id) => {
      try {
        console.log("print karwao id", id);
        const response = await axiosGate(
          "GET",
          `/cardData/get-dashboard-data-by-id?id=${id}`
        );

        console.log("response data ka data", response.data.findSingleProfile);

        return response.data.findSingleProfile;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    updateCompanyData: async (formData) => {
      console.log(formData);
      const data = await axiosGate("POST", "/reach/updateCompanyDetails", {
        formData,
      });
      return data;
    },
    updateWorker_ThekedaarDetails: async (formData) => {
      console.log(formData);
      const data = await axiosGate("POST", "/reach/updateWorkerDetails", {
        formData,
      });
      return data;
    },
    //#endregion

    //#region
    filterHomePageEngineer: async (
      minExperience,
      commercialProjects,
      residentialProjects,
      category
    ) => {
      console.log(
        "filter home page engineer",
        minExperience,
        commercialProjects,
        residentialProjects,
        category
      );

      try {
        const url = `/filters/filterEngineer?minExperience=${encodeURIComponent(
          minExperience
        )}&commercialProjects=${encodeURIComponent(
          commercialProjects
        )}&residentialProjects=${encodeURIComponent(
          residentialProjects
        )}&category=${encodeURIComponent(category)}`;

        // Perform a GET request
        console.log("what is the url", url);
        const response = await axiosGate("GET", url);

        console.log("whats your hiring command says", response.data.data);

        return response;
      } catch (error) {
        console.error("Something error happened", error);
        return { success: false, message: error.message };
      }
    },
    hireAnyOneElse: async (state) => {
      try {
        console.log("console me state data ", state);
        const response = await axiosGate(
          "GET",
          `/filters/locateWorker/${state}`
        );
        console.log(
          "ye le tera response",
          response.data.requireWorker_Thekedaar
        );
        return response.data.requireWorker_Thekedaar;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    getSpecificWorkerDataByFilter: async (state, city, pincode) => {
      try {
        // Construct the URL with query parameters

        const url = `/filters/filterWorker?state=${encodeURIComponent(
          state
        )}&city=${encodeURIComponent(city)}&pincode=${encodeURIComponent(
          pincode
        )}`;

        // Perform a GET request
        console.log("what is the url", url);
        const response = await axiosGate("GET", url);

        return response.data;
      } catch (error) {
        console.error("Something error happened", error);
        return { success: false, message: error.message };
      }
    },

    getSpecificEngineerDataByFilter: async (state, city, pincode) => {
      try {
        // Construct the URL with query parameters

        const url = `/filters/locateEngineer?state=${encodeURIComponent(
          state
        )}&city=${encodeURIComponent(city)}&pincode=${encodeURIComponent(
          pincode
        )}`;

        // Perform a GET request
        console.log("what is the url", url);
        const response = await axiosGate("GET", url);

        console.log("Response from server:", response.data.data);
        return response.data;
      } catch (error) {
        console.error("Something error happened", error);
        return { success: false, message: error.message };
      }
    },

    getSpecificCompanies: async (companySearch) => {
      try {
        // Construct the URL with query parameters

        const url = `/filters/filterCompany?category=${encodeURIComponent(
          companySearch
        )}`;

        // Perform a GET request
        console.log("what is the url", url);
        const response = await axiosGate("GET", url);

        console.log("Response from server:", response.data.data);
        return response.data.data;
      } catch (error) {
        console.error("Something error happened", error);
        return { success: false, message: error.message };
      }
    },

    getResumeLinkById: async (id) => {
      try {
        console.log("print karwao id", id);
        const response = await axiosGate("GET", `/get-files?id=${id}`);

        console.log("response data ka data resume waala", response);

        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },

    getDomainById: async (id) => {
      try {
        console.log("print karwao id", id);
        const response = await axiosGate(
          "GET",
          `/reach/check-user-wrt-id?id=${id}`
        );

        console.log("response data ka data resume waala", response.data.data);

        return response.data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },

    //#endregion
  };
};

export default index();
