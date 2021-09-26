import { useState } from 'react'
import NextButton from 'components/common/next-button'
import BackButton from 'components/common/back-button'
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';



function Location(props) {

    const initialState = {};
    for (let x in (props.presetData.enum)) {
        initialState[x] = false
    }
    
    const options = Object.keys(props.presetData.enum)
    const [locData, setLocData] = useState(props.formData == null ? {...initialState} : {...props.formData})

    const handleChange = (value) => {
        setLocData({
            ...locData,
            [value]: !locData[value]
        })
    }

    
    const onDone = () => {
        const result  = []
        for (let x in locData) {
            if (locData[x] === true) {
                result.push(props.presetData.enum[x])
            }
        }
        if (result.length<1) {
        alert("Please choose something")
        } else {
            props.setFormData(result)
            props.nextStep()
            return
        }
    }
    
    return(
    <>
        <h1>
            <p>Where do you wanna eat</p>    
        </h1>  
        <br/>
        <br/>
        <div>
            <Autocomplete
                onChange={(event, newValue) => {
                    if (newValue) {
                handleChange(newValue)
                    }
                }}
                id="autocomplete dropdown search bar"
                options={options}
                style={{ width: 300, margin: "auto" }}
                renderInput={(params) => <TextField {...params} label="Options" variant="outlined" />}
            />
        </div>
        <br/>
        <NextButton nextStep={onDone}/> 
        <br/>
        <BackButton prevStep={props.prevStep}/>
    
    </>
    
    
    )
}

export default Location
