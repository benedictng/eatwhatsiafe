import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useHistory, useRouteMatch } from 'react-router-dom'

const EnterName = ({action}) => {
    let history = useHistory()
    let match = useRouteMatch()
    const [name, setName] = useState('')

    const onChange = (e) => {
        setName(e.target.value)
    }

    const onSubmit = () => {
        if (action == 'create') {
            // submit name to backend either here or at the end of room creation.
            history.push(`${match.url}/create-room`, {
                name: name
            })
        } else {
            // check whether this name already has submitted the stuff
            if (hasUserVoted(name)) {
                history.push(`${match.url}/done`)
            } else {
                history.push(`${match.url}/vote`)
            }
        }
    }

    const hasUserVoted = (name) => {
        // TODO check against room data
        return false
    }

    return (
        <>
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Label>Your name or initials:</Form.Label>
                <Form.Control className='room-code-input' type='text' name='roomCode' onChange={onChange}/>
            </Form.Group>
        </Form>
        </>
    )
}

export default EnterName
