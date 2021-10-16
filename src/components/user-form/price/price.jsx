import { useState } from 'react'
import NextButton from 'components/common/next-button'
// import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButton from '@mui/material/ToggleButton';

const Price = ({
    presetData, formData, setFormData, nextStep,
}) => {
    const initialState = {};
    Object.keys(presetData.enum).forEach((x) => { initialState[x] = false })

    const options = Object.keys(presetData.enum)
    const [priceData, setPriceData] = useState(
        formData == null
            ? { ...initialState }
            : { ...formData },
    )

    const onCheckboxTicked = (option) => {
        setPriceData({
            ...priceData,
            [option]: !priceData[option],
        })
    }

    const onDone = () => {
        const result = []
        Object.keys(priceData).forEach((x) => {
            if (priceData[x] === true) {
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
            selected={priceData[x]}
            name={x}
            onChange={() => onCheckboxTicked(x)}
        >
            {x}
        </ToggleButton>
    ))

    return (
        <div>
            <h1>
                <p>Price points</p>
            </h1>
            <div>
                {buttonMap}
            </div>
            <br />
            <br />
            <NextButton nextStep={onDone} />
            <br />
        </div>
    )
}

export default Price
