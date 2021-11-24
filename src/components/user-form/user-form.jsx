import { useState } from 'react';
import Price from 'components/user-form/price'
import Cuisine from 'components/user-form/cuisine';
import DiningType from 'components/user-form/dining-type'
import DietRestrict from 'components/user-form/diet-restrict'
import Location from 'components/user-form/location'
import BackButton from 'components/common/back-button'
import NextButton from 'components/common/next-button'
import { Link, useHistory } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Button from '@mui/material/Button';
import RoomAPI from 'api/room'
import cuisinePresetData from 'common/constants/cuisine-preset-data';
import dietRestrictPresetData from 'common/constants/diet-restriction-preset-data';
import diningTypePresetData from 'common/constants/dining-type-preset-data';
import locationPresetData from 'common/constants/location-preset-data';
import pricePresetData from 'common/constants/price-preset-data';
import Box from '@mui/material/Box';

const UserForm = () => {
    const [step, setStep] = useState(1)
    const [price, setPrice] = useState(null)
    const [cuisineType, setCuisineType] = useState(null)
    const [dietRest, setDietRest] = useState(null)
    const [diningType, setDiningType] = useState(null)
    const [location, setLocation] = useState(null)
    const history = useHistory()

    // Proceed to next step
    const nextStep = () => {
        setStep(step + 1)
    }

    // Go back to previous step
    const prevStep = () => {
        setStep(step - 1)
    }

    const createRoom = () => {
        alert(JSON.stringify({
            regions: location,
            price_levels: price,
            cuisine_types: cuisineType,
            dining_types: diningType,
            dietary_restrictions: dietRest,
        }))
        RoomAPI.createRoom({
            room_name: history.location.state.roomName,
            host_username: history.location.state.name,
            regions: location,
            price_levels: price,
            cuisine_types: cuisineType,
            dining_types: diningType,
            dietary_restrictions: dietRest,
        }).then((res) => {
            alert(`received response: ${JSON.stringify(res)}`)
            history.push(`/room/${res.data.room_code}`, history.location.state)
        })
    }

    switch (step) {
    case 1:
        return (
            <div>
                <Price
                    nextStep={nextStep}
                    prevStep={prevStep}
                    setFormData={setPrice}
                    formData={price}
                    history={history}
                    presetData={pricePresetData}
                />
                <br />
            </div>
        );

    case 2:
        return (
            <div>
                <Cuisine
                    nextStep={nextStep}
                    prevStep={prevStep}
                    setFormData={setCuisineType}
                    formData={cuisineType}
                    presetData={cuisinePresetData}
                />
                <br />
            </div>
        )

    case 3:
        return (
            <div>
                <DiningType
                    nextStep={nextStep}
                    prevStep={prevStep}
                    setFormData={setDiningType}
                    formData={diningType}
                    presetData={diningTypePresetData}
                />
                <br />
            </div>
        )

    case 4:
        return (
            <div>
                <DietRestrict
                    nextStep={nextStep}
                    prevStep={prevStep}
                    setFormData={setDietRest}
                    formData={dietRest}
                    presetData={dietRestrictPresetData}
                />
                <br />
            </div>
        )
    case 5:
        return (
            <div>
                <Location
                    nextStep={nextStep}
                    prevStep={prevStep}
                    setFormData={setLocation}
                    formData={location}
                    presetData={locationPresetData}

                />
                <br />
            </div>
        )

    case 6:
        // just to show state
        return (
            <div>
                <p>
                    PRICE DATA:
                    {JSON.stringify(price, null, '\t')}
                </p>
                <p>
                    VETO DATA:
                    {JSON.stringify(cuisineType, null, '\t')}
                </p>
                <p>
                    DININGTYPE DATA:
                    {JSON.stringify(diningType, null, '\t')}
                </p>
                <p>
                    REST DATA:
                    {JSON.stringify(dietRest, null, '\t')}
                </p>
                <p>
                    LOCATION DATA:
                    {JSON.stringify(location, null, '\t')}
                </p>

                <Link to="/room/abcd">Go to status page</Link>
                <br />
                <Box sx={
                    {
                        display: 'flex', my: 5, 'align-items': 'center', justifyContent: 'center',
                    }
                }
                >
                    <NextButton nextStep={nextStep} />
                    <BackButton prevStep={prevStep} />
                </Box>
                <Button variant="contained" onClick={createRoom}>Create room</Button>
            </div>
        )

    default:
        console.log('ERROR')
        alert('ERROR')
        return <div>An error occured 😬 </div>
    }
}

export default UserForm
