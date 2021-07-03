import GetName from 'components/landing-page/get-name'

const GetJoinerName = ({existingUsers}) => {

    const submitName = (name) => {
        console.log(existingUsers)
        if (existingUsers.includes(name)) {
            // direct to results page
            alert(`${name} has already voted. Direct to results page now.`)
        } else {
            // direct to voting page
            alert('Direct to rooms landing page.')
        }
    }

    return (
        <GetName onSubmit={submitName} />
    )
}

export default GetJoinerName