import axios from 'axios'
import {
    IRoomAPI,
    CreateRoomPayload, CreateRoomResponse, RoomStatusPayload, RoomStatusResponse,
    SubmitVotePayload, SubmitVoteResponse, FoodListPayload, FoodListResponse,
    CloseRoomPayload, CloseRoomResponse, RoomResultsPayload, RoomResultsResponse,
} from './room_api_interface'

const createRoom = (payload: CreateRoomPayload): Promise<CreateRoomResponse> => {
    const url = 'https://eat-what-ah.herokuapp.com/room/create'
    return axios.post(url, payload).then((res) => res.data)
}

const getRoomStatus = (payload: RoomStatusPayload): Promise<RoomStatusResponse> => {
    const url = 'https://eat-what-ah.herokuapp.com/room/status'
    return axios.post(url, payload).then((res) => res.data)
}

const submitVote = (payload: SubmitVotePayload): Promise<SubmitVoteResponse> => {
    const url = 'https://eat-what-ah.herokuapp.com/room/vote'
    return axios.post(url, payload).then((res) => res.data)
}

const getFoodList = (payload: FoodListPayload): Promise<FoodListResponse> => {
    const url = 'https://eat-what-ah.herokuapp.com/room/foodlist'
    return axios.post(url, payload).then((res) => res.data)
}

const getRoomResults = (payload: RoomResultsPayload): Promise<RoomResultsResponse> => {
    const url = 'https://eat-what-ah.herokuapp.com/room/results'
    return axios.post(url, payload).then((res) => res.data)
}

const closeRoom = (payload: CloseRoomPayload): Promise<CloseRoomResponse> => {
    const url = 'https://eat-what-ah.herokuapp.com/room/close'
    return axios.post(url, payload).then((res) => res.data)
}

const RoomAPIImpl : IRoomAPI = {
    createRoom,
    getRoomStatus,
    submitVote,
    getFoodList,
    getRoomResults,
    closeRoom,
}

export default RoomAPIImpl
