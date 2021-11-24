/* eslint-disable */
import { useState } from 'react'
import NextButton from 'components/common/next-button'
import { flexbox } from '@mui/system';
import FormHeading from 'components/common/form-heading'
import SelectionButton from 'components/common/selection-button'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


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
            <FormHeading heading='What prices are we looking at?' />
            {buttonMap}
            <Box sx={{ my: 5, justifyContent: 'center'}}>
                <Button
                    onClick={onDone}
                    variant="contained"
                    sx={{
                        'border-radius': 0,
                        width: '343px',
                        height: '48px',
                        'background-color': '#FFB854',
                        color: '#1D1D1D',
                        'box-shadow': '8px 8px #1D1D1D',
                        mx: 1,
                    }}
                >
                    <strong>Next</strong>
                </Button>
            </Box>
        </>
    )
}

export default Price
