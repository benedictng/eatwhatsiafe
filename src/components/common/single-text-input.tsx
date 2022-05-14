import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import Box from '@mui/material/Box';
import FormHeading from 'components/common/form-heading'
import FloatingOrangeButton from 'components/common/floating-orange-button'

type InputProps = {
    label: string | null
    helperText: string | null
    placeholder: string | null
    submitButtonLabel: string
    onSubmit: (s: string) => void
    backButtonLabel?: string
    onBack?: React.MouseEventHandler
    fullWidth: boolean | null
}

const SingleTextInput = (props: InputProps) => {
    const {
        label, helperText, placeholder, submitButtonLabel, onSubmit, backButtonLabel, onBack, fullWidth,
    } = props
    const [value, setValue] = useState<string | null>(null)

    const onChangeInternal: React.ChangeEventHandler<HTMLInputElement> = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setValue(e.currentTarget.value)
    }

    const onSubmitInternal = () => {
        if (value === null) {
            alert('Please enter a value!')
            return
        }
        onSubmit(value)
    }

    const renderBackButton = () => ((backButtonLabel === null || onBack === null)
        ? null
        : (
            <FloatingOrangeButton onClick={onBack} buttonText={backButtonLabel} />
        ))

    return (
        <>
            <FormHeading heading={label} showErrMsg="" boxStyles={{ 'margin-top': '48px' }} />
            <TextField
                id="user_input"
                label=""
                helperText={helperText}
                placeholder={(placeholder !== null) ? placeholder : ''}
                variant="outlined"
                onChange={onChangeInternal}
                fullWidth={fullWidth !== null ? fullWidth : false}
            />

            {
                // @ts-ignore
                <Box sx={{
                    display: 'flex',
                    my: 5,
                    'align-items': 'center',
                    justifyContent: 'center',
                }}
                >
                    {renderBackButton()}
                    <FloatingOrangeButton onClick={onSubmitInternal} buttonText={submitButtonLabel} />
                </Box>
            }
        </>
    )
}

export default SingleTextInput
