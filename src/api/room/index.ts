import MockRoomAPI from "./local_mocks";
import RoomAPIImpl from "./room";
import { RoomAPI } from "./room_api";

let roomApi: any
if (process.env.REACT_APP_ENV === 'LOCAL') {
    roomApi = MockRoomAPI
} else {
    roomApi = RoomAPIImpl
}

// export default (process.env.REACT_APP_ENV === 'LOCAL') ? MockRoomAPI : RoomAPIImpl
export default (roomApi as RoomAPI)