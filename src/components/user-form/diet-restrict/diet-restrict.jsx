import { useState } from 'react'
import NextButton from 'components/common/next-button'
import SelectionButton from 'components/common/selection-button'
import FormHeading from 'components/common/form-heading'
import Box from '@mui/material/Box';
import BackButton from '../../common/back-button'

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
        setFormData(restData)
        nextStep()
    }

    const buttonMap = options.map((x) => (
        <SelectionButton text={x} data={restData} onCheckboxTicked={onCheckboxTicked} />
    ))

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '100vh',
                position: 'absolute',
                top: '0',
                width: '100vw',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <>
                    <FormHeading heading="Ermmm we have these dietary restrictions" />
                    <Box>
                        {buttonMap}
                    </Box>
                    <Box sx={
                        {
                            display: 'flex',
                            my: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }
                    }
                    >
                        <BackButton prevStep={prevStep} />
                        <NextButton nextStep={onDone} />
                    </Box>
                </>

            </Box>
        </Box>
    )
}

export default DietRestrict
