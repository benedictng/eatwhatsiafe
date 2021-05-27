import React, { useState } from "react";

import "./food-selection.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const here = slides.data[0].photos;
  const length = here.length;

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
        {here.map((slider, id) => {
          //why must set the if else for the className?
          console.log(slider);
          return (
            <div className={current === id ? "slide active" : "slide"} key={id}>
              {id === current && (
                <img src={slider} className="img" alt="Food Pictures" />
                
              )}
              
            </div>
            
          );
        })}
      </section>
    </>
  );
};

export default Carousel;
