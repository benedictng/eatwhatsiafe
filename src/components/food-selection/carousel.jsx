import { useState } from 'react';

import './food-selection.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const { length } = slides;

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
                {slides.map((slider, id) => (
                    <div className={current === id ? 'slide active' : 'slide'} key={id}>
                        {id === current && (
                        <img src={`data:image/jpeg;base64,${slider}`} className="image" alt="Food Pictures" />

                        )}

                    </div>

                ))}
            </section>
        </>
    );
};

export default Carousel;
