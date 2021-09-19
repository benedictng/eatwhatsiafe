import { useState } from 'react'
import NextButton from 'components/common/next-button'
import BackButton from 'components/common/back-button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { locationPresetData } from "common/constants/location-preset-data";
import ToggleButton from 'react-bootstrap/ToggleButton'
import "./location.css"
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';



function Location(props) {

    const options = Object.keys(locationPresetData.enum)
    const state = locationPresetData.state

    const [locData, setLocData] = useState(props.formData == null ? {...state} : {...props.formData})

    const handleChange = (value) => {
        setLocData({
            ...locData,
            [value]: !locData[value]
        })
    }

    
    const onDone = () => {
        for (let x in locData) {
            if (locData[x] == true) {
                props.setFormData(locData)
                props.nextStep()
                return;
            }
        }
        alert("Please choose something")
        }

   
    
    
    const onCheckboxTicked = (cuisine) => {
        setLocData({
            ...locData,
            [cuisine]: !locData[cuisine]
        })
    }

    
    const tagMap =[]

    for (var key in locData) {
        if (locData[key]==true) {
            tagMap.push(
                <ToggleButton
                    type="checkbox"
                    variant="primary"
                    checked={locData[key]}
                    name = {key}
                    onChange={() => onCheckboxTicked(key)}
                    >
                    {key}
                </ToggleButton>
                )    
        }
    }    

    return(
    <>
           
        <p>Where do you wanna eat</p>    
        {tagMap}
        <br/>
        <br/>
        <Autocomplete
        onChange={(event, newValue) => {
            if (newValue) {
          handleChange(newValue)
            }
        }}
        id="controllable-states-demo"
        options={options}
        style={{ width: 300, margin: "auto" }}
        renderInput={(params) => <TextField {...params} label="Options" variant="outlined" />}
      />
        <br/>
        <NextButton nextStep={onDone}/> 
        <br/>
        <BackButton prevStep={props.prevStep}/>
    
    </>
    
    
    )
}

export default Location
