import Carousel from 'react-material-ui-carousel';

import './food-selection.css';

function FoodImageCarousel({ photos }) {
    const photoMaps = photos.map((photo, id) => (
        <div
            style={{
                display: 'flex', alignItems: 'center', height: '100%', width: '100%', margin: 'auto',
            }}
        >
            <img
                key={id}
                src={`data:image/jpeg;base64,${photo}`}
                className="image"
                alt="Food Pictures"
            />
        </div>
    ))

    return (
        <Carousel
            className="carou-style"
            autoPlay={0}
            navButtonsProps={{ // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    opacity: 100,
                },
            }}
            height={500}
            next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
            prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
        >
            {photoMaps}
        </Carousel>
    )
}

export default FoodImageCarousel;
