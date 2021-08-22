import { useState } from 'react'
import NextButton from 'components/common/next-button'
import BackButton from '../../common/back-button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { dietRestrictData } from "./diet-restrict-data";

const DietRestrict = (props) => {
    const options = dietRestrictData.options
    const state = dietRestrictData.state

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
