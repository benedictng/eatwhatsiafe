import React, { useState } from "react";
import { carouselData } from "./carouselData";
import "./food-selection.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  console.log(length);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <section className="slider">
        <AiOutlineArrowLeft className="left-arrow" onClick={prevSlide} />
        <AiOutlineArrowRight className="right-arrow" onClick={nextSlide} />
        {carouselData.map((slider, id) => {
          //why must set the if else for the className?
          return (
            <div className={current === id ? "slide active" : "slide"} key={id}>
              {id === current && (
                <img src={slider.image} className="img" alt="Food Pictures" />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Carousel;
