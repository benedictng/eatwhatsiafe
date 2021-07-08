import axios from 'axios'
import { IRoomAPI, CreateRoomPayload, CreateRoomResponse } from "./room_api_interface"

const createRoom = (payload: CreateRoomPayload): Promise<CreateRoomResponse> => {
    const url = 'some url to be separated into a config / env file'
    return axios.post(url, payload)
}

const RoomAPIImpl : IRoomAPI = {
    createRoom: createRoom
}

export default RoomAPIImpl
