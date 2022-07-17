import { Link, useLocation } from 'react-router-dom'
import NextButton from 'components/common/next-button'
import { EwsH1, EwsP } from 'components/common/typography/text-components'

const Entrance = ({ nextStep }) => {
    const location = useLocation()

    const renderReceivedData = () => {
        const { name, roomName } = location.state || {}
        if (name && roomName) {
            return (
                <EwsH1>
                    {name}
                    {' '}
                    is organizing
                    {' '}
                    {roomName}
                </EwsH1>
            )
        }
        return (
            <EwsH1>
                Please go to the
                <Link to="/">main page</Link>
                {' '}
                to create room
            </EwsH1>
        )
    }

    return (
        <div>
            {renderReceivedData()}
            <EwsP> Eatwhatsia... </EwsP>
            <EwsP> Dont beta, force your friends to decide together lah</EwsP>
            <NextButton
                nextStep={nextStep}
            />
        </div>
    )
}

export default Entrance
