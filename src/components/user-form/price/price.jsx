/* eslint-disable */
import { useState } from 'react'
import NextButton from 'components/common/next-button'
import { flexbox } from '@mui/system';
import FormHeading from 'components/common/form-heading'
import SelectionButton from 'components/common/selection-button'

const Price = ({
    presetData, formData, setFormData, nextStep,
}) => {
    const initialState  = {};
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
        <SelectionButton text={x} data={priceData} onCheckboxTicked={onCheckboxTicked} />
    ))

    return (
        <>
            <FormHeading heading='I want to eat at these areas' />
            <div sx={{
                display: flexbox,
                'justify-content': 'space-around',
            }}>
                {buttonMap}
            </div>
            <NextButton nextStep={onDone} />
        </>
    )
}

export default Price
