import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { shortList, list, longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";

import React from "react";
import Slider from "react-slick";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="slick-container">
      <h2>single item</h2>
      <Slider {...settings}>
        {list.map((person) => {
          const { id, image, title, name, quote } = person;
          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default SlickCarousel;
