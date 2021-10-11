import { useState } from 'react'
import NextButton from 'components/common/next-button'
import BackButton from '../../common/back-button'
//import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButton from '@mui/material/ToggleButton';


const DietRestrict = (props) => {
    const initialState = {};
    for (let x in (props.presetData.enum)) {
        initialState[x] = false
    }

    const options =  Object.keys(props.presetData.enum)
    const [restData, setRestData] = useState(props.formData == null ? {...initialState} : {...props.formData})


    const onCheckboxTicked = (option) => {
        setRestData({
            ...restData,
            [option]: !restData[option]
        })
    }

    const onDone = () => {
        const result  = []
        for (let x in restData) {
            if (restData[x] === true) {
                result.push(props.presetData.enum[x])
            }
        }
        props.setFormData(result)
        props.nextStep()
    }

    const buttonMap = options.map(x => 
        <ToggleButton
        selected={restData[x]}
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
