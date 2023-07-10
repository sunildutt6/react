import React, { useEffect } from "react";

const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
  const fetchData = async () => {
    console.log("global");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">GlobalInstance</h2>;
};

export default GlobalInstance;
