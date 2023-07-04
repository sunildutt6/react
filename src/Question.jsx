import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <BiMinus /> : <BsPlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
