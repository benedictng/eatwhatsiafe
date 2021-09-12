import { useState } from 'react'
import NextButton from 'components/common/next-button'
import BackButton from '../../common/back-button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { pricePresetData } from "common/constants/price-preset-data";


const Price = (props) => {
    const state = {};
    const result = [];
    const options =  Object.keys(pricePresetData.enum)

    for (let x in pricePresetData.enum) {
        state[x] = false
    }

    const [priceData, setPriceData] = useState(props.formData == null ? {...state} : {...props.formData})

    const onCheckboxTicked = (option) => {
        setPriceData({
            ...priceData,
            [option]: !priceData[option]
        })
    }

    const onDone = () => {
        for (let x in priceData) {
            if (priceData[x] == true) {
                props.setFormData(priceData)
                props.nextStep()
                return;
            }
        }
        alert("Please choose something")
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
        
        </>
    )
}

export default Price
