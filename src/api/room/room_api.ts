import axios from 'axios'
import {
    IRoomAPI,
    CreateRoomPayload, CreateRoomResponse, RoomStatusPayload, RoomStatusResponse,
    SubmitVotePayload, SubmitVoteResponse, FoodListPayload, FoodListResponse,
    CloseRoomPayload, CloseRoomResponse, RoomResultsPayload, RoomResultsResponse,
} from './room_api_interface'

const createRoom = async (payload: CreateRoomPayload): Promise<CreateRoomResponse> => {
    const url = 'https://eat-what-ah.herokuapp.com/room/create'
    const res = await axios.post(url, payload)
    return res.data
}

const getRoomStatus = async (payload: RoomStatusPayload): Promise<RoomStatusResponse> => {
    const url = 'https://eat-what-ah.herokuapp.com/room/status'
    const res = await axios.post(url, payload)
    return res.data
}

const submitVote = async (payload: SubmitVotePayload): Promise<SubmitVoteResponse> => {
    const url = 'https://eat-what-ah.herokuapp.com/room/vote'
    const res = await axios.post(url, payload)
    return res.data
}

const getFoodList = async (payload: FoodListPayload): Promise<FoodListResponse> => {
    const url = 'https://eat-what-ah.herokuapp.com/room/foodlist'
    const res = await axios.post(url, payload)
    return res.data
}

const getRoomResults = async (payload: RoomResultsPayload): Promise<RoomResultsResponse> => {
    const url = 'https://eat-what-ah.herokuapp.com/room/results'
    const res = await axios.post(url, payload)
    return res.data
}

const closeRoom = async (payload: CloseRoomPayload): Promise<CloseRoomResponse> => {
    const url = 'https://eat-what-ah.herokuapp.com/room/close'
    const res = await axios.post(url, payload)
    return res.data
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
