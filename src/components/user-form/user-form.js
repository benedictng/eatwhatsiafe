import React, { Component, useState } from 'react';
import Price from 'components/user-form/price'
import Cuisine from 'components/user-form/cuisine';
import DiningType from 'components/user-form/dining-type'
import DietRestrict from 'components/user-form/diet-restrict'
import Location from 'components/user-form/location'
import BackButton from 'components/common/back-button'
import NextButton from 'components/common/next-button'
import { Link, useHistory } from 'react-router-dom';
import Status from 'components/room-status';
import Button from 'react-bootstrap/Button';
import RoomAPI from 'api/room'





const UserForm = () => {
    
    const [step, setStep] = useState(1)
    const [price, setPrice] = useState(null)
    const [veto, setVeto] = useState(null)
    const [rest, setRest] = useState(null)
    const [diningType, setDiningType] = useState(null)
    const [location, setLocation] = useState(null)
    const [roomCode, setRoomCode] = useState(null)
    const history = useHistory()

    // Proceed to next step
    const nextStep = () => {
        setStep(step+1)
    }

    // Go back to previous step
    const prevStep = () => {
        setStep(step-1)
    }

    const createRoom = () => {
        const priceResult = []
        Object.keys(price).map(x => {
                if (price[x] == true) {
                    priceResult.push(x)
                }}
        )
        alert("price_levels = " + priceResult + "history = " + JSON.stringify(history.location.state))
        console.log(RoomAPI)
        RoomAPI.createRoom({
            room_name: history.location.state.roomName,
            host_username: history.location.state.name,
            region: 3,
            price_levels: priceResult,
            cuisine_types: [1, 4],
            dining_types: [1, 3],
            dietary_restrictions: [1, 3, 5]
        }).then(res => {
            alert(`received response: ${JSON.stringify(res)}`)
            setRoomCode(res.data.room_code)
            //history.push('/room/'+res.data.room_code, {name: history.location.state.name, roomName: history.location.state.roomName})
            history.push('/room/'+res.data.room_code, history.location.state)
        })
    }



    switch(step) {
            case 1:
                return (
                    <div>
                        <Price 
                        nextStep = {nextStep}
                        prevStep = {prevStep}
                        setFormData = {setPrice}
                        formData = {price}
                        history = {history}
                        />
                        <br/>
                        <p>PRICE DATA: {JSON.stringify(price, null, '\t')}</p>
                    </div>
                )
            
            case 2:
                return (
                    <div>
                        <Cuisine 
                        nextStep = {nextStep}
                        prevStep = {prevStep}
                        setFormData = {setVeto}
                        formData = {veto}
                        />
                        <br/>
                        <p>VETO DATA: {JSON.stringify(veto, null, '\t')}</p>
                    </div>
                )

            case 3: 
                return (
                    <div>
                        <DiningType
                        nextStep = {nextStep}
                        prevStep = {prevStep}
                        setFormData = {setDiningType}
                        formData = {diningType}
                        />
                        <br/>
                        <p>DININGTYPE DATA: {JSON.stringify(diningType, null, '\t')}</p>
                    </div>
            )

            case 4: 
                return (
                    <div>
                        <DietRestrict 
                        nextStep = {nextStep}
                        prevStep = {prevStep}
                        setFormData = {setRest}
                        formData = {rest}
                        />
                        <br/>
                        <p>REST DATA: {JSON.stringify(rest, null, '\t')}</p>
                    </div>
            )
            case 5:
                return (
                    <div>
                        <Location 
                        nextStep = {nextStep}
                        prevStep = {prevStep}
                        setFormData = {setLocation}
                        formData = {location}
                        />
                        <br/>
                        <p>LOCATION DATA: {JSON.stringify(location, null, '\t')}</p>
                    </div>
                )
            
            case 6:
                //just to show state
                return (
                    <div>
                        <p>PRICE DATA: {JSON.stringify(price, null, '\t')}</p>
                        <p>VETO DATA: {JSON.stringify(veto, null, '\t')}</p>
                        <p>DININGTYPE DATA: {JSON.stringify(diningType, null, '\t')}</p>
                        <p>REST DATA: {JSON.stringify(rest, null, '\t')}</p>
                        <p>LOCATION DATA: {JSON.stringify(location, null, '\t')}</p>

                        <Link to='/room/abcd'>Go to status page</Link><br />

                        <BackButton 
                        prevStep = {prevStep}
                        />
                        <NextButton nextStep={nextStep}/> 
                        <Button onClick = {createRoom}>Create room</Button>
                    </div>
                )
                
        }
        return (
            <div>
                
            </div>
        )
    }


export default UserForm
