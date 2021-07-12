import { useState } from 'react'
import NextButton from 'components/common/next-button'
import BackButton from '../../common/back-button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { pricePresetData } from "./price-data";

const Price = (props) => {
    const options = pricePresetData.options
    const state = pricePresetData.state

    const [priceData, setPriceData] = useState(props.formData == null ? {...state} : {...props.formData})

    const onCheckboxTicked = (cuisine) => {
        setPriceData({
            ...priceData,
            [cuisine]: !priceData[cuisine]
        })
    }

    const onDone = () => {
        props.setFormData(priceData)
        props.nextStep()
    }

    const buttonMap = options.map(x => 
        <ToggleButton
        type="checkbox"
        variant="primary"
        checked={priceData[x]}
        name = {x}
        onChange={() => onCheckboxTicked(x)}
        >
          {x}
        </ToggleButton>
        )

    return (
        <>
        <p>Price points</p>    
        {buttonMap}
        <br/>
        <br/>
        <NextButton nextStep={onDone}/> 
        <br/>
        <BackButton prevStep={props.prevStep}/>
        
        </>
    )
}

export default Price
