import MockRoomAPI from "./local_mocks";
import RoomAPIImpl from "./room";
import { IRoomAPI } from "./room_api";

let RoomAPI: IRoomAPI
if (process.env.REACT_APP_ENV === 'LOCAL') {
    RoomAPI = MockRoomAPI
} else {
    RoomAPI = RoomAPIImpl
}

// export default (process.env.REACT_APP_ENV === 'LOCAL') ? MockRoomAPI : RoomAPIImpl
export default RoomAPI
