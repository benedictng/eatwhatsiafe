/* eslint-disable */
import { useState } from 'react'
import NextButton from 'components/common/next-button'
// import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButton from '@mui/material/ToggleButton';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

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
        <Grid item xs={1}>
            <ToggleButton
                selected={priceData[x]}
                name={x}
                onChange={() => onCheckboxTicked(x)}
                sx={{
                    height: '43px',
                    width: '59px',
                    left: '385px',
                    top: '0px',
                    'border-radius': '50px',
                    padding: '12px, 24px, 12px, 24px',
                    'background-color': '#1D1D1D',
                    'box-shadow': '4px 4px #9FEADD',
                    'color': '#FBFBFB',
                }}
            >
                {x}
            </ToggleButton>
        </Grid>
    ))

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <h1>
                        <p>What prices are we looking at for this group people</p>
                    </h1>
                </Grid>
                {buttonMap}
                <Grid item md={12}>
                    <NextButton nextStep={onDone} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Price
