import { useState } from 'react'
import NextButton from 'components/common/next-button'
import FormHeading from 'components/common/form-heading'
import SelectionButton from 'components/common/selection-button'
import Box from '@mui/material/Box';
import BackButton from '../../common/back-button'

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
        setFormData(cuisineData)
        nextStep()
    }

    const buttonMap = options.map((x) => (
        <SelectionButton text={x} data={cuisineData} onCheckboxTicked={onCheckboxTicked} />
    ))

    return (
        <>

            <FormHeading heading="I want to opt out of these cuisines" />
            {buttonMap}
            <Box sx={
                {
                    display: 'flex', my: 5, 'align-items': 'center', justifyContent: 'center',
                }
            }
            >
                <BackButton prevStep={prevStep} />
                <NextButton nextStep={onDone} />
            </Box>
        </>
    )
}

export default Cuisine
