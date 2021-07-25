import { useState } from 'react'
import NextButton from 'components/common/next-button'
import BackButton from '../../common/back-button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { pricePresetData } from "./price-data";

const Price = (props) => {
    const data = pricePresetData.options
    const options = Object.keys(pricePresetData.options)
    const state = pricePresetData.state

    const [priceData, setPriceData] = useState(props.formData == null ? {...state} : {...props.formData})

    const onCheckboxTicked = (option) => {
        setPriceData({
            ...priceData,
            [option]: !priceData[option]
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
        checked={priceData[data[x]]}
        name = {x}
        onChange={() => onCheckboxTicked(data[x])}
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
