import { useState } from 'react'
// import { flexbox } from '@mui/system';
import Box from '@mui/material/Box';
import FormHeading from 'components/common/form-heading'
import SelectionButton from 'components/common/selection-button'
import NextButton from 'components/common/next-button'
import BackButton from '../../common/back-button'

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
        <SelectionButton text={x} data={diningTypeData} onCheckboxTicked={onCheckboxTicked} />
    ))

    return (
        <>
            <FormHeading heading="We are OK with eating in these settings:" />
            { buttonMap }
            <Box sx={
                {
                    display: 'flex', my: 5, 'align-items': 'center', justifyContent: 'center',
                }
            }
            >
                <NextButton nextStep={onDone} />
                <BackButton prevStep={prevStep} />
            </Box>
        </>
    )
}

export default DiningType
