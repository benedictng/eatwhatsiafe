import { useState } from 'react'
import NextButton from 'components/common/next-button'
import ToggleButton from '@mui/material/ToggleButton';
import BackButton from '../../common/back-button'
// import ToggleButton from 'react-bootstrap/ToggleButton'

const Cuisine = ({
    presetData, formData, setFormData, nextStep, prevStep,
}) => {
    const initialState = {};
    Object.keys(presetData.enum).forEach((x) => { initialState[x] = false })

    const options = Object.keys(presetData.enum)

    const [cuisineData, setCuisineData] = useState(
        formData == null
            ? { ...initialState }
            : { ...formData },
    )

    const onCheckboxTicked = (option) => {
        setCuisineData({
            ...cuisineData,
            [option]: !cuisineData[option],
        })
    }

    const onDone = () => {
        const result = []
        Object.keys(cuisineData).forEach((x) => {
            if (cuisineData[x] === true) {
                result.push(presetData.enum[x])
            }
        })
        setFormData(result)
        nextStep()
    }

    const buttonMap = options.map((x) => (
        <ToggleButton
            selected={cuisineData[x]}
            name={x}
            onChange={() => onCheckboxTicked(x)}
        >
            {x}
        </ToggleButton>
    ))

    return (
        <div>
            <h1>
                <p>I don&apos;t wanna eat this</p>
            </h1>
            <div>
                {buttonMap}
            </div>
            <br />
            <NextButton nextStep={onDone} />
            <br />
            <BackButton prevStep={prevStep} />
        </div>
    )
}

export default Cuisine
