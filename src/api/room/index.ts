/*eslint-disable*/
import MockRoomAPI from './local_mocks';
import RoomAPIImpl from './room_api';
import { IRoomAPI } from './room_api_interface';

const getRoomApi = (env: string) => {
    if (env === 'development') {
        return MockRoomAPI
    }
    return RoomAPIImpl
}

const RoomAPI: IRoomAPI = getRoomApi(process.env.NODE_ENV)

export default RoomAPI
