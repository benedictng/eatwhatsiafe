import { useState } from 'react'
import NextButton from 'components/common/next-button'
import BackButton from '../../common/back-button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { dietRestrictPresetData } from "common/constants/diet-restriction-preset-data";

const DietRestrict = (props) => {
    const state = {};
    const result = [];
    const options =  Object.keys(dietRestrictPresetData.enum)

    
    for (let x in dietRestrictPresetData.enum) {
        state[x] = false
    }


    const [restData, setRestData] = useState(props.formData == null ? {...state} : {...props.formData})


    const onCheckboxTicked = (cuisine) => {
        setRestData({
            ...restData,
            [cuisine]: !restData[cuisine]
        })
    }

    const onDone = () => {
        props.setFormData(restData)
        props.nextStep()
    }

    const buttonMap = options.map(x => 
        <ToggleButton
        type="checkbox"
        variant="primary"
        checked={restData[x]}
        name = {x}
        onChange={() => onCheckboxTicked(x)}
        >
          {x}
        </ToggleButton>
        )

    return (
        <>
        <p>I can't eat this</p>    
        {buttonMap}
        <br/>
        <br/>
        <NextButton nextStep={onDone}/> 
        <br/>
        <BackButton prevStep={props.prevStep}/>
        
        </>
    )
}

export default DietRestrict
