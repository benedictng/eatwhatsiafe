import { IRoomAPI, CreateRoomPayload, CreateRoomResponse, RoomStatusPayload, RoomStatusResponse, SubmitVotePayload, SubmitVoteResponse } from "./room_api_interface"

const createRoom = (payload: CreateRoomPayload): Promise<CreateRoomResponse>  => {
    return new Promise((res, rej) => {
        setTimeout(
            () => res(MockData.CreateRoomResponse),
            1000
        )
        // error when payload is wrong format?
    })
}

const getRoomStatus = (payload: RoomStatusPayload): Promise<RoomStatusResponse> => {
    return new Promise((res, rej) => {
        setTimeout(
            () => res(MockData.RoomStatusResponse),
            1000
        )
        // error when payload is wrong format?
    })
}

const submitVote = (payload: SubmitVotePayload): Promise<SubmitVoteResponse> => {
    return new Promise((res, rej) => {
        setTimeout(
            () => res(MockData.SubmitVoteResponse),
            1000
        )
        // error when payload is wrong format?
    })
}

const MockRoomAPI: IRoomAPI = {
    createRoom: createRoom,
    getRoomStatus: getRoomStatus,
    submitVote: submitVote
}

const MockData = {
    CreateRoomResponse: {
        error_code: 0,
        error_msg: '',
        data: {
            room_code: 'ABCD'
        }
    },
    RoomStatusResponse: {
        error_code: 0,
        error_msg: '',
        data: {
            room_name: 'Lunch with Greg',
            status: 1,
            voted_users: ['Mary', 'Amy'],
            host_username: 'Greg'
        }
    },
    SubmitVoteResponse: {
        error_code: 0,
        error_msg: ''
    }
}

export default MockRoomAPI
