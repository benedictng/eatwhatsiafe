import GetName from 'components/landing-page/get-name'

const GetJoinerName = ({existingUsers, toRoomStatusPage}) => {

    const submitName = (name) => {
        console.log(existingUsers)
        window.sessionStorage.setItem('name', name)
        if (existingUsers.includes(name)) {
            // direct to results page
            alert(`${name} has already voted. Direct to results page now.`)
            toRoomStatusPage(true)

        } else {
            // direct to voting page
            alert(`${name} has not voted. Direct to rooms landing page.`)
            toRoomStatusPage(false)
        }
    }

    return (
        <GetName onSubmit={submitName} />
    )
}

export default GetJoinerName
