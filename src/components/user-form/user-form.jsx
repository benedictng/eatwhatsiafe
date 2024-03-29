/* eslint-disable*/

import { useState } from 'react';
import Price from 'components/user-form/price'
import Cuisine from 'components/user-form/cuisine';
import DiningType from 'components/user-form/dining-type'
import DietRestrict from 'components/user-form/diet-restrict'
import Location from 'components/user-form/location'
import BackButton from 'components/common/back-button'
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import RoomAPI from 'api/room'
import cuisinePresetData from 'common/constants/cuisine-preset-data';
import dietRestrictPresetData from 'common/constants/diet-restriction-preset-data';
import diningTypePresetData from 'common/constants/dining-type-preset-data';
import locationPresetData from 'common/constants/location-preset-data';
import pricePresetData from 'common/constants/price-preset-data';
import Box from '@mui/material/Box';
import Footer from 'components/footer';
import Loading from 'components/common/loading'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Container from '@mui/material/Container';
import { EwsH3, EwsP } from 'components/common/typography/text-components';

const UserForm = () => {
    const [error, setError] = useState(false);

    const restartSelection = () => {
        window.history.back();
    };

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

    const enumerateState = (state, presetData) => {
        const result = []
        Object.keys(state).forEach((x) => {
            if (state[x] === true) {
                result.push(presetData.enum[x])
            }
        })
        return result
    }

    const enumerateStateForOptOut = (state, presetData) => {
        var result = new Set()
        for (const key in presetData.enum) {
            result.add(presetData.enum[key]);
        }
        Object.keys(state).forEach((x) => {
            if (state[x] === true) {
                result.delete(presetData.enum[x])
            }
        })
        result = Array.from(result)
        return result
    }

    const createRoom = () => {
        RoomAPI.createRoom({
            room_name: history.location.state.roomName,
            host_username: window.sessionStorage.getItem('name'),
            regions: enumerateState(location, locationPresetData),
            price_levels: enumerateState(price, pricePresetData),
            cuisine_types: enumerateStateForOptOut(cuisineType, cuisinePresetData),
            // dining_types: enumerateState(diningType, diningTypePresetData),
            dietary_restrictions: enumerateState(dietRest, dietRestrictPresetData),
        }).then((res) => {
            if (res.error_code === 0) {
                setError(true)
                history.push(`/room/${res.data.room_code}`, {'create': true});
            } else if (res.error_code === 2) {
                setError(true)
            }
        })
    }

    function errorDialog() {
        if (error) {
            return (
                <div>
                    <Dialog
                        open={error}
                        onClose={restartSelection}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            There are no food places found based on your requirements.
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Your food selection criteria is too narrow, dumbassie.
                                Please restart and select a wider set of criteria.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>

                            <Button onClick={restartSelection} autoFocus>
                                Restart
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )
        } return <Loading />
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
                <Footer />

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
                <Footer />

            </div>
        )

    case 9:
        return (
            <div>
                <DiningType
                    nextStep={nextStep}
                    prevStep={prevStep}
                    setFormData={setDiningType}
                    formData={diningType}
                    presetData={diningTypePresetData}
                />
                <Footer />
            </div>

        )

    case 3:
        return (
            <div>
                <DietRestrict
                    nextStep={nextStep}
                    prevStep={prevStep}
                    setFormData={setDietRest}
                    formData={dietRest}
                    presetData={dietRestrictPresetData}
                />
                <Footer />
            </div>

        )
    case 4:
        return (
            <div>
                <Location
                    nextStep={nextStep}
                    prevStep={prevStep}
                    setFormData={setLocation}
                    formData={location}
                    presetData={locationPresetData}
                    createRoom={createRoom}
                />
                <Footer />
            </div>
        )

    case 5:
        createRoom()
        return <>{errorDialog()}</>

    case 6:
        // just to show state
        return (
            <div>
                <EwsP>
                    PRICE DATA:
                    {JSON.stringify(price, null, '\t')}
                </EwsP>
                <EwsP>
                    VETO DATA:
                    {JSON.stringify(cuisineType, null, '\t')}
                </EwsP>
                <EwsP>
                    DININGTYPE DATA:
                    {JSON.stringify(diningType, null, '\t')}
                </EwsP>
                <EwsP>
                    REST DATA:
                    {JSON.stringify(dietRest, null, '\t')}
                </EwsP>
                <EwsP>
                    LOCATION DATA:
                    {JSON.stringify(location, null, '\t')}
                </EwsP>

                <Button variant="contained" onClick={createRoom}><EwsH3>Create room</EwsH3></Button>
                <br />
                <Box sx={
                    {
                        display: 'flex', my: 5, alignItems: 'center', justifyContent: 'center',
                    }
                }
                >
                    <BackButton prevStep={prevStep} />
                </Box>
            </div>
        )

    default:
        alert('ERROR - Boons Brain Damage')
        return <div>An error occured 😬 </div>
    }
}

export default UserForm
