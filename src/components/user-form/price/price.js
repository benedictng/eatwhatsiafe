import { useState } from 'react'
import NextButton from 'components/common/next-button'
import ToggleButton from 'react-bootstrap/ToggleButton'

const Price = (props) => {
    const initialState = {};
    for (let x in (props.presetData.enum)) {
        initialState[x] = false
    }

    const options =  Object.keys(props.presetData.enum)
    const [priceData, setPriceData] = useState(props.formData == null ? {...initialState} : {...props.formData})

    const onCheckboxTicked = (option) => {
        setPriceData({
            ...priceData,
            [option]: !priceData[option]
        })
    }

    const onDone = () => {
        const result  = []
        for (let x in priceData) {
            if (priceData[x] === true) {
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
        <div>
            <h1>
                <p>Price points</p>    
            </h1>
            <div>
                {buttonMap}
            </div>
            <br/>
            <br/>
            <NextButton nextStep={onDone}/> 
            <br/>
        </div>
    )
}

export default Price
