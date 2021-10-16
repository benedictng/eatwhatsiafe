import { useState } from 'react'
import NextButton from 'components/common/next-button'
import ToggleButton from '@mui/material/ToggleButton';
import BackButton from '../../common/back-button'
// import ToggleButton from 'react-bootstrap/ToggleButton'

const DietRestrict = ({
    presetData, formData, setFormData, nextStep, prevStep,
}) => {
    const initialState = {}
    Object.keys(presetData.enum).forEach((x) => { initialState[x] = false })

    const options = Object.keys(presetData.enum)
    const [restData, setRestData] = useState(
        formData == null
            ? { ...initialState }
            : { ...formData },
    )

    const onCheckboxTicked = (option) => {
        setRestData({
            ...restData,
            [option]: !restData[option],
        })
    }

    const onDone = () => {
        const result = []
        Object.keys(restData).forEach((x) => {
            if (restData[x] === true) {
                result.push(presetData.enum[x])
            }
        })
        setFormData(result)
        nextStep()
    }

    const buttonMap = options.map((x) => (
        <ToggleButton
            selected={restData[x]}
            name={x}
            onChange={() => onCheckboxTicked(x)}
        >
            {x}
        </ToggleButton>
    ))

    return (
        <>
            <p>I can&apos;t eat this</p>
            {buttonMap}
            <br />
            <br />
            <NextButton nextStep={onDone} />
            <br />
            <BackButton prevStep={prevStep} />

        </>
    )
}

export default DietRestrict
