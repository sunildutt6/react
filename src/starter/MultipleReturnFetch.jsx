import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        console.log(user);
        setUser(user);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>There was an error....</h2>;
  }

  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>Works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};

export default MultipleReturnFetch;
