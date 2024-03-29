import { useState } from 'react'
import SingleTextInput from 'components/common/single-text-input'
import GetName from 'components/common/get-name'

import Container from '@mui/material/Container';
import { EwsH1 } from 'components/common/typography/text-components';

const GetHostName = ({ createRoom, onBack }) => {
    const [enteringName, setEnteringName] = useState(true)
    const [state, setState] = useState({ name: '', roomName: '' })

    const onSubmitName = (name) => {
        setState({ ...state, name })
        setEnteringName(false)
        window.sessionStorage.setItem('name', name)
    }

    const onSubmitRoomName = (roomName) => {
        const newState = { ...state, roomName }
        setState(newState)
        createRoom(newState)
    }

    const renderSetRoomName = () => (
        <>
            <EwsH1 style={{ 'margin-bottom': '1.25rem' }}>{`Hi there, ${state.name}`}</EwsH1>
            <EwsH1 style={{ 'margin-bottom': '3rem' }}>
                Thanks for helping your poor friend decide.
            </EwsH1>

            <div style={{ 'max-width': '50vw', margin: 'auto' }}>
                <SingleTextInput
                    label="Give your room a name"
                    placeholder="e.g. dinz with da special lads"
                    submitButtonLabel="Next"
                    onSubmit={onSubmitRoomName}
                    backButtonLabel="Back"
                    onBack={() => setEnteringName(true)}
                    fullWidth
                />
            </div>
        </>
    )

    return (
        <Container>
            { enteringName
                ? <GetName onSubmit={onSubmitName} onBack={onBack} />
                : renderSetRoomName()}
        </Container>
    )
}

export default GetHostName
