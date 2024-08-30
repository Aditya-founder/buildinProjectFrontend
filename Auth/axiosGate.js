import axios from "axios";

const axiosGate = async (method, get_route, postData) => {
  try {
    console.log("ye le tera postdata", postData);

    // Retrieve the token from local storage
    const token = localStorage.getItem("authToken");

    const axiosPayload = {
      method: method,
      url: `/api/v1${get_route}`,
      header: {
        // Include the token in the Authorization header if it exists
        Authorization: token ? `Bearer ${token}` : "",
        // You can add other headers here if needed, like CSRF tokens
        // "X-CSRF-Token": yourCsrfToken,
      },
      data: postData ? postData : null,
    };

    console.log("log from axiosPayload:", axiosPayload);
    const data = await axios(axiosPayload);

    return {
      status: true,
      data: data.data,
    };
  } catch (e) {
    return {
      status: false,
      message: e.message,
    };
  }
};

export default axiosGate;
