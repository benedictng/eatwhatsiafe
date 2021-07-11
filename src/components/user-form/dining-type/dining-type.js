import { useState } from 'react'
import NextButton from 'components/common/next-button'
import BackButton from '../../common/back-button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { diningTypePresetData } from "./dining-type-data";

const DiningType = (props) => {
    const options = diningTypePresetData.options
    const state = diningTypePresetData.state

    const [diningTypeData, setDiningTypeData] = useState(props.formData == null ? {...state} : {...props.formData})

    const onCheckboxTicked = (cuisine) => {
        setDiningTypeData({
            ...diningTypeData,
            [cuisine]: !diningTypeData[cuisine]
        })
    }

    const onDone = () => {
        props.setFormData(diningTypeData)
        props.nextStep()
    }

    const buttonMap = options.map(x => 
        <ToggleButton
        type="checkbox"
        variant="primary"
        checked={diningTypeData[x]}
        name = {x}
        onChange={() => onCheckboxTicked(x)}
        >
          {x}
        </ToggleButton>
        )

    return (
        <>
        <p>Dining Types</p>    
        {buttonMap}
        <br/>
        <br/>
        <NextButton nextStep={onDone}/> 
        <br/>
        <BackButton prevStep={props.prevStep}/>
        
        </>
    )
}

export default DiningType
