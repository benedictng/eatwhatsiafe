import React from 'react';
import Carousel from 'react-material-ui-carousel';

import './food-selection.css';

function Carousel2({ photos }) {
    return (
        <Carousel
            className="carou-style"
            autoPlay={0}
            navButtonsProps={{ // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    opacity: 100,
                },
            }}
            next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
            prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
        >
            {
                photos.map((photo, id) => (
                    <img key={id} src={photo} className="image" alt="Food Pictures" />
                ))
            }
        </Carousel>
    )
}

export default Carousel2;
