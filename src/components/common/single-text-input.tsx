import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

type InputProps = {
    label: string
    submitButtonLabel: string
    onSubmit: (s: string) => void
    backButtonLabel?: string
    onBack?: React.MouseEventHandler
}

const SingleTextInput = (props: InputProps) => {
    const {
        label, submitButtonLabel, onSubmit, backButtonLabel, onBack,
    } = props
    const [value, setValue] = useState<string | null>(null)

    const onChangeInternal: React.ChangeEventHandler<HTMLInputElement> = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setValue(e.currentTarget.value)
    }

    const onSubmitInternal: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent) => {
        e.preventDefault()
        if (value === null) {
            alert('Please enter a value!')
            return
        }
        onSubmit(value)
    }

    const renderBackButton = () => ((backButtonLabel === null || onBack === null)
        ? null
        : (
            <Button className="back-button" variant="light" onClick={onBack}>
                {backButtonLabel}
            </Button>
        ))

    return (
        <Form onSubmit={onSubmitInternal}>
            <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control type="text" name="user_input" onChange={onChangeInternal} />
            </Form.Group>
            <br />
            <Button className="submit-button" variant="light" type="submit">
                {submitButtonLabel}
            </Button>
            {renderBackButton()}
        </Form>
    )
}

export default SingleTextInput
