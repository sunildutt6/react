import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number < 0) {
      return people.length - 1;
    }

    if (number > people.length - 1) {
      return 0;
    } else {
      return number;
    }
  };

  const prevPerson = () => {
    setIndex((currentValue) => {
      const newValue = currentValue - 1;
      return checkNumber(newValue);
    });
  };

  const nextPerson = () => {
    setIndex((currentValue) => {
      const newValue = currentValue + 1;
      return checkNumber(newValue);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber == index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  console.log(name);
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          surpise me
        </button>
        <SurpriseButton />
      </article>
    </main>
  );
};

const SurpriseButton = () => {
  const randomPeople = () => {
    console.log(Math.random());
  };

  return (
    <button className="btn btn-hipster" onClick={randomPeople}>
      surprise me
    </button>
  );
};

export default App;
