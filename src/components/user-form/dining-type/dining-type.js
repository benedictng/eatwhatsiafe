import { useState } from 'react'
import NextButton from 'components/common/next-button'
import BackButton from '../../common/back-button'
import ToggleButton from 'react-bootstrap/ToggleButton'

const DiningType = (props) => {
    const initialState = {};
    for (let x in (props.presetData.enum)) {
        initialState[x] = false
    }

    const options =  Object.keys(props.presetData.enum)
    const [diningTypeData, setDiningTypeData] = useState(props.formData == null ? {...initialState} : {...props.formData})

    const onCheckboxTicked = (option) => {
        setDiningTypeData({
            ...diningTypeData,
            [option]: !diningTypeData[option]
        })
    }

    const onDone = () => {
        const result  = []
        for (let x in diningTypeData) {
            if (diningTypeData[x] === true) {
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
