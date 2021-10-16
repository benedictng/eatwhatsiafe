import { useState } from 'react'
import NextButton from 'components/common/next-button'
import BackButton from 'components/common/back-button'
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
// import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButton from '@mui/material/ToggleButton';

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
                <div>
                    <ToggleButton
                        selected={locData[key]}
                        name={key}
                        onChange={() => onCheckboxTicked(key)}
                    >
                        {key}
                    </ToggleButton>
                    <br />
                </div>,
            )
        }
    })

    return (
        <>
            <h1>
                <p>Where do you wanna eat</p>
            </h1>
            {tagMap}
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
            <br />
            <NextButton nextStep={onDone} />
            <br />
            <BackButton prevStep={prevStep} />

        </>
    )
}

export default Location
