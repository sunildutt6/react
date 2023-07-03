import React, { useEffect, useState } from "react";

const MultipleReturnBasic = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return <div>MultipleReturn Basic</div>;
};

export default MultipleReturnBasic;
