import axios from 'axios'
import { RoomAPI, CreateRoomPayload, CreateRoomResponse } from "./room_api"

class RoomAPIImpl implements RoomAPI {
    createRoom = (payload: CreateRoomPayload): Promise<CreateRoomResponse> => {
        const url = 'some url to be separated into a config / env file'
        return axios.post(url, payload)
    }
}

export default RoomAPIImpl