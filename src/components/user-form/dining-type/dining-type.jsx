import { useState } from 'react'
import { flexbox } from '@mui/system';
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
            <FormHeading heading="I want to eat at these areas" />
            <div sx={{
                display: flexbox,
                'justify-content': 'space-around',
            }}
            >
                {buttonMap}
            </div>
            <NextButton nextStep={onDone} />
            <br />
            <BackButton prevStep={prevStep} />

        </>
    )
}

export default DiningType
