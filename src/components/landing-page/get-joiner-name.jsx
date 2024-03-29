import GetName from 'components/common/get-name'

const GetJoinerName = ({ existingUsers, toRoomStatusPage }) => {
    const submitName = (name) => {
        window.sessionStorage.setItem('name', name)
        if (existingUsers.includes(name)) {
            // direct to results page
            console.log(`${name} has already voted. Direct to results page now.`)
            toRoomStatusPage(true)
        } else {
            // direct to voting page
            console.log(`${name} has not voted. Direct to rooms landing page.`)
            toRoomStatusPage(false)
        }
    }

    return (
        <GetName onSubmit={submitName} />
    )
}

export default GetJoinerName
