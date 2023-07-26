import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { styled } from "styled-components";

const Stars = ({ stars, reviews }) => {
  const tempStar = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= index + 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="stars">{tempStar}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default Stars;
