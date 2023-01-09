import { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'

import './food-selection.css'

const FoodImageCarousel = ({ photos }) => {
    const [photoMaps, setPhotoMaps] = useState(null)

    useEffect(() => {
        const calculateHeight = (naturalHeight, naturalWidth) => {
            if (naturalHeight >= naturalWidth) {
                return 500
            }

            const ratio = naturalHeight / naturalWidth
            return ratio * 500
        }

        async function createPhotoElements() {
            return Promise.all(photos.map(async (photo, id) => {
                const img = new Image()
                img.src = `data:image/jpeg;base64,${photo}`
                await img.decode()
                const { naturalHeight } = img
                const { naturalWidth } = img
                const height = calculateHeight(naturalHeight, naturalWidth)
                return (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: `${height}px`,
                            margin: 'auto',
                        }}
                    >
                        <img
                            key={id}
                            src={`data:image/jpeg;base64,${photo}`}
                            className="image"
                            alt="Food Pictures"
                        />
                    </div>
                )
            }))
        }
        createPhotoElements().then((elements) => setPhotoMaps(elements))
    }, [])

    return photoMaps === undefined ? <div>Loading</div> : (
        <Carousel
            className="carou-style"
            autoPlay={0}
            navButtonsProps={{ // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    opacity: 100,
                },
            }}
        >
            {photoMaps}
        </Carousel>
    )
}

export default FoodImageCarousel
