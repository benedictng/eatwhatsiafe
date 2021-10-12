import { useState } from 'react'
import SingleTextInput from 'components/common/single-text-input'
import GetName from 'components/landing-page/get-name'

const GetHostName = ({createRoom}) => {
    const [enteringName, setEnteringName] = useState(true)
    const [state, setState] = useState({name: '', roomName: ''})

    const onSubmitName = (name) => {
        setState({...state, name: name})
        setEnteringName(false)
        window.sessionStorage.setItem('name', name)
    }

    const onSubmitRoomName = (roomName) => {
        const newState = {...state, roomName: roomName}
        setState(newState)
        createRoom(newState)
    }

    const renderSetRoomName = () => (
        <>
            <h4>{`Hi there, ${state.name}`}</h4>
            <SingleTextInput
                label='Give your room a name'
                submitButtonLabel='Next'
                onSubmit={onSubmitRoomName}
                backButtonLabel='Back'
                onBack={() => setEnteringName(true)}
            />
        </>
    )

    return (
        <>
            { enteringName
                ? <GetName onSubmit={onSubmitName} />
                : renderSetRoomName()
            }
        </>
    )
}

export default GetHostName
