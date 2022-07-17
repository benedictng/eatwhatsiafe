import { useState } from 'react'
import FormHeading from 'components/common/form-heading'
import SelectionButton from 'components/common/selection-button'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { EwsH3 } from 'components/common/typography/text-components';

const Price = ({
    presetData, formData, setFormData, nextStep,
}) => {
    const [notSelectedErr, setNotSelectedErr] = useState(false)

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
            setNotSelectedErr(true)
        } else {
            setFormData(priceData)
            nextStep()
        }
    }
    const buttonMap = options.map((x) => (
        <SelectionButton key={x} text={x} data={priceData} onCheckboxTicked={onCheckboxTicked} />
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
                    <FormHeading
                        heading="What prices are we looking at?"
                        showErrMsg={notSelectedErr}
                    />
                    <Box>
                        {buttonMap}
                    </Box>
                    <Box sx={{
                        position: 'relative',
                        bottom: '-8px',
                        right: '-8px',
                        'background-color': '#1d1d1d',
                        width: '343px',
                        height: '48px',
                        mx: 'auto',
                        my: 5,
                    }}
                    >
                        <Button
                            data={priceData}
                            onClick={onDone}
                            variant="contained"
                            sx={{
                                bottom: '8px',
                                right: '8px',
                                position: 'relative',
                                'border-radius': 0,
                                width: '100%',
                                height: '100%',
                                'background-color': '#FFB854',
                                color: '#1D1D1D',
                                '&:hover': {
                                    transform: 'translate(8px, 8px)',
                                    'background-color': '#9eeadd',

                                },
                                transition: 'transform 0.3s',
                            }}
                        >
                            <EwsH3>next</EwsH3>
                        </Button>
                    </Box>
                </>
            </Box>
        </Box>
    )
}

export default Price
