import Carousel from 'react-material-ui-carousel';

import './food-selection.css';

function Carousel2({ photos }) {
    const photoMaps = photos.map((photo, id) => (
        <img
            key={id}
            src={`data:image/jpeg;base64,${photo}`}
            className="image"
            alt="Food Pictures"
        />
    ))

    return (
        <Carousel
            className="carou-style"
            height={50}
            autoPlay={0}
            dynamicHeight={1}
            navButtonsProps={{ // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    opacity: 100,
                },
            }}
            next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
            prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
        >
            {photoMaps}
        </Carousel>
    )
}

export default Carousel2;
