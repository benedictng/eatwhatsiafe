import React, {useState} from 'react'
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
    const {label, submitButtonLabel, onSubmit, backButtonLabel, onBack} = props
    const [value, setValue] = useState(null)
    
    const _onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.currentTarget.value)
    }

    const _onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        onSubmit(value)
    }

    const renderBackButton = () => {
        return (backButtonLabel === null || onBack === null)
            ? null
            : <Button variant='light' onClick={onBack}>{backButtonLabel}</Button>
    }

    return (
        <Form onSubmit={_onSubmit}>
            <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control type='text' name='user_input' onChange={_onChange}/>
            </Form.Group>
            <br />
            <Button variant='light' type='submit'>{submitButtonLabel}</Button>
            {renderBackButton()}
        </Form>
    )
}

export default SingleTextInput
