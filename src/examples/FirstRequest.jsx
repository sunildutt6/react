import axios from "axios";
import React, { useEffect } from "react";

const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  });

  return <h2 className="text-center">First Request</h2>;
};

export default FirstRequest;
