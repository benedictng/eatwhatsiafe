import RoomAPI from 'api/room'
import { useState } from 'react'

const ExampleApiCall = () => {
    const [roomCode, setRoomCode] = useState('')

    const makeCall = () => {
        console.log(RoomAPI)
        RoomAPI.createRoom({
            room_name: 'my room name',
            host_username: 'hoeward',
            regions: 3,
            price_levels: [1, 2, 3],
            cuisine_types: [1, 4],
            dining_types: [1, 3],
            dietary_restrictions: [1, 3, 5],
        }).then((res) => {
            alert(`received response: ${JSON.stringify(res)}`)
            setRoomCode(res.data.room_code)
        })
    }

    const clear = () => setRoomCode('')

    return (
        <>
            <h1>
                Sample Room Code:
                {roomCode}
            </h1>
            <button type="button" onClick={makeCall}>Make API call</button>
            <button type="button" onClick={clear}>Clear</button>
        </>
    )
}

export default ExampleApiCall
