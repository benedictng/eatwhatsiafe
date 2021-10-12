import { useState } from 'react'
import NextButton from 'components/common/next-button'
import BackButton from '../../common/back-button'
//import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButton from '@mui/material/ToggleButton';


const Cuisine = (props) => {
    const initialState = {};
    for (let x in (props.presetData.enum)) {
        initialState[x] = false
    }

    const options =  Object.keys(props.presetData.enum)

    const [cuisineData, setCuisineData] = useState(props.formData == null ? {...initialState} : {...props.formData})

    const onCheckboxTicked = (option) => {
        setCuisineData({
            ...cuisineData,
            [option]: !cuisineData[option]
        })
    }

    const onDone = () => {
        const result  = []
        for (let x in cuisineData) {
            if (cuisineData[x] === true) {
                result.push(props.presetData.enum[x])
            }
        }
        props.setFormData(result)
        props.nextStep()
    }

    const buttonMap = options.map(x => 
        <ToggleButton
            selected={cuisineData[x]}
            name = {x}
            onChange={() => onCheckboxTicked(x)}
        >
            {x}
        </ToggleButton>
    )

    return (
        <div>
            <h1>
                <p>I dont't wanna eat this</p>    
            </h1>
            <div>
                {buttonMap}
            </div>
            <br/>
            <NextButton nextStep={onDone}/> 
            <br/>
            <BackButton prevStep={props.prevStep}/>
        </div>
    )
}

export default Cuisine
