import { RoomAPI, CreateRoomPayload, CreateRoomResponse } from "./room_api"

class MockRoomAPI implements RoomAPI {
    createRoom(payload: CreateRoomPayload): Promise<CreateRoomResponse> {
        return new Promise((res, rej) => {
            setTimeout(
                () => res(MockData.CreateRoomResponse),
                1000
            )
            // error when payload is wrong format?
        })
    }   
}

const MockData = {
    CreateRoomResponse: {
        error_code: 0,
        error_msg: '',
        data: {
            room_code: 'ABCD'
        }
    }
}

export default MockRoomAPI