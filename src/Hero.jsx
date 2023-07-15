import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            facilisis sem orci, sit amet lacinia sapien iaculis ut. In sit amet
            ultricies elit. Aenean dignissim imperdiet purus, non mollis purus
            aliquet vitae. Proin in justo nec nisi mollis placerat. Nam mollis
            leo eu tincidunt pellentesque. Etiam mollis hendrerit diam, nec
            ultricies ex. Mauris aliquet nibh justo, sit amet condimentum lectus
            convallis posuere.{" "}
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
