import { useState } from 'react'
import NextButton from 'components/common/next-button'
import ToggleButton from '@mui/material/ToggleButton';
import BackButton from '../../common/back-button'
// import ToggleButton from 'react-bootstrap/ToggleButton'

const DiningType = ({
    presetData, formData, setFormData, nextStep, prevStep,
}) => {
    const initialState = {};
    Object.keys(presetData.enum).forEach((x) => { initialState[x] = false })

    const options = Object.keys(presetData.enum)
    const [diningTypeData, setDiningTypeData] = useState(
        formData == null
            ? { ...initialState }
            : { ...formData },
    )

    const onCheckboxTicked = (option) => {
        setDiningTypeData({
            ...diningTypeData,
            [option]: !diningTypeData[option],
        })
    }

    const onDone = () => {
        const result = []
        Object.keys(diningTypeData).forEach((x) => {
            if (diningTypeData[x] === true) {
                result.push(presetData.enum[x])
            }
        })
        if (result.length < 1) {
            alert('Please choose something')
        } else {
            setFormData(result)
            nextStep()
        }
    }

    const buttonMap = options.map((x) => (
        <ToggleButton
            sx={{
                width: 300,
                background: 'white',
                radius: 50,
            }}
            selected={diningTypeData[x]}
            name={x}
            onChange={() => onCheckboxTicked(x)}
        >
            {x}
        </ToggleButton>
    ))

    return (
        <>
            <p>Dining Types</p>
            {buttonMap}
            <br />
            <br />
            <NextButton nextStep={onDone} />
            <br />
            <BackButton prevStep={prevStep} />

        </>
    )
}

export default DiningType
