/* eslint-disable */
import { useState } from 'react'
import NextButton from 'components/common/next-button'
import BackButton from 'components/common/back-button'
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import FormHeading from 'components/common/form-heading'
import SelectionButton from 'components/common/selection-button'
import { flexbox } from '@mui/system';
import Box from '@mui/material/Box';

const Location = ({
    presetData, formData, setFormData, nextStep, prevStep,
}) => {
    const initialState = {};
    Object.keys(presetData.enum).forEach((x) => { initialState[x] = false })

    let options = Object.keys(presetData.enum)

    const temp = options.slice(0, 5)
    options = options.slice(5).sort()
    options.unshift(...temp)
    const [locData, setLocData] = useState(formData == null ? { ...initialState } : { ...formData })

    const handleChange = (value) => {
        setLocData({
            ...locData,
            [value]: !locData[value],
        })
    }

    const onDone = () => {
        const result = []
        Object.keys(locData).forEach((key) => {
            if (locData[key] === true) {
                result.push(presetData.enum[key])
            }
        })
        if (result.length < 1) {
            alert('Please choose something')
        } else {
            setFormData(result)
            nextStep()
        }
    }
    const onCheckboxTicked = (cuisine) => {
        setLocData({
            ...locData,
            [cuisine]: !locData[cuisine],
        })
    }

    const tagMap = []

    Object.keys(locData).forEach((key) => {
        if (locData[key] === true) {
            tagMap.push(
              <SelectionButton text={key} data={locData} onCheckboxTicked={onCheckboxTicked} />
            )
        }
    })

    return (
        <>
            <FormHeading heading='I want to eat at these locations:' />
            <div sx={{
                display: flexbox,
                'justify-content': 'space-around',
            }}>
                {tagMap}
            </div>
            <br />
            <br />
            <div>
                <Autocomplete
                    onChange={(event, newValue) => {
                        if (newValue) {
                            handleChange(newValue)
                        }
                    }}
                    id="autocomplete dropdown search bar"
                    options={options}
                    style={{ width: 300, margin: 'auto' }}
                    renderInput={(params) => <TextField {...params} label="Options" variant="outlined" />}
                />
            </div>
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

export default Location
