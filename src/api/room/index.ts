import MockRoomAPI from "./local_mocks";
import RoomAPIImpl from "./room_api";
import { IRoomAPI } from "./room_api_interface";

let RoomAPI: IRoomAPI
if (process.env.NODE_ENV === 'development') {
    RoomAPI = MockRoomAPI
} else {
    RoomAPI = RoomAPIImpl
}

export default RoomAPI
