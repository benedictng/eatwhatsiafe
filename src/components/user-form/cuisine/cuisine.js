import { useState } from 'react'
import NextButton from 'components/common/next-button'
import BackButton from '../../common/back-button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { cuisinePresetData } from "common/constants/cuisine-preset-data";

const Cuisine = (props) => {
    const state = {};
    const result = [];
    const options =  Object.keys(cuisinePresetData.enum)

    for (let x in cuisinePresetData.enum) {
        state[x] = false
    }


    const [cuisineData, setCuisineData] = useState(props.formData == null ? {...state} : {...props.formData})

    const onCheckboxTicked = (cuisine) => {
        setCuisineData({
            ...cuisineData,
            [cuisine]: !cuisineData[cuisine]
        })
    }

    const onDone = () => {
        props.setFormData(cuisineData)
        props.nextStep()
    }

    const buttonMap = options.map(x => 
        <ToggleButton
        type="checkbox"
        variant="primary"
        checked={cuisineData[x]}
        name = {x}
        onChange={() => onCheckboxTicked(x)}
        >
          {x}
        </ToggleButton>
        )

    return (
        <>
        <p>I don't wanna eat this</p>    
        {buttonMap}
        <br/>
        <br/>
        <NextButton nextStep={onDone}/> 
        <br/>
        <BackButton prevStep={props.prevStep}/>
        
        </>
    )
}

export default Cuisine
