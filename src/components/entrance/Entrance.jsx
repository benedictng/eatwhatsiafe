import { Link, useLocation } from 'react-router-dom'
import NextButton from 'components/common/next-button'

const Entrance = ({ nextStep }) => {
    const location = useLocation()

    const renderReceivedData = () => {
        const { name, roomName } = location.state || {}
        if (name && roomName) {
            return (
                <h1>
                    {name}
                    {' '}
                    is organizing
                    {' '}
                    {roomName}
                </h1>
            )
        }
        return (
            <h1>
                Please go to the
                <Link to="/">main page</Link>
                {' '}
                to create room
            </h1>
        )
    }

    return (
        <div>
            {renderReceivedData()}
            <p> Eatwhatsia... </p>
            <p> Dont beta, force your friends to decide together lah</p>
            <NextButton
                nextStep={nextStep}
            />
        </div>
    )
}

export default Entrance
