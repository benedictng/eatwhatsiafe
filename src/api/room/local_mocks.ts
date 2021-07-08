import { IRoomAPI, CreateRoomPayload, CreateRoomResponse } from "./room_api"

const createRoom = (payload: CreateRoomPayload): Promise<CreateRoomResponse>  => {
    return new Promise((res, rej) => {
        setTimeout(
            () => res(MockData.CreateRoomResponse),
            1000
        )
        // error when payload is wrong format?
    })
}   

const MockRoomAPI: IRoomAPI = {
    createRoom: createRoom
}

const MockData = {
    CreateRoomResponse: {
        error_code: 0,
        error_msg: 'No Error!',
        data: {
            room_code: 'ABCD'
        }
    }
}

export default MockRoomAPI
