import {Switch, Route, useParams, useLocation, useRouteMatch} from 'react-router-dom'
import UserForm from 'components/user-form/UserForm'

const Room = () => {
    let { roomCode } = useParams()
    let location = useLocation()
    let match = useRouteMatch()
    const action = 'BLAH'

    // top bar that just permanently displays room code?

    return (
        <>
            <h2>{roomCode}</h2>

            <Switch>
                <Route path={`${match.url}/`}>
                    
                </Route>
                <Route path={`${match.url}/create-room`}>
                    <UserForm />
                </Route>
                <Route path={`${match.url}/vote`}>
                    <div>This is where the user votes for the restaurant.</div>
                </Route>
                <Route path={`${match.url}/done`}>
                    <div>This should be a component showing the summary.</div>
                </Route>
            </Switch>
        </>
    )
}

export default Room
