import axios from 'axios'
import { IRoomAPI, CreateRoomPayload, CreateRoomResponse, RoomStatusPayload, RoomStatusResponse, SubmitVotePayload, SubmitVoteResponse, FoodListResponse, FoodListPayload, CloseRoomPayload, CloseRoomResponse, RoomResultsPayload, RoomResultsResponse } from "./room_api_interface"

const createRoom = (payload: CreateRoomPayload): Promise<CreateRoomResponse> => {
    const url = 'some url to be separated into a config / env file'
    return axios.post(url, payload)
}

const getRoomStatus = (payload: RoomStatusPayload): Promise<RoomStatusResponse> => {
    const url = 'some url to be separated into a config / env file'
    return axios.post(url, payload)
}

const submitVote = (payload: SubmitVotePayload): Promise<SubmitVoteResponse> => {
    const url = 'some url to be separated into a config / env file'
    return axios.post(url, payload)
}

const getFoodList = (payload: FoodListPayload): Promise<FoodListResponse> => {
    const url = 'some url to be separated into a config / env file'
    return axios.post(url, payload)
}

const getRoomResults = (payload: RoomResultsPayload): Promise<RoomResultsResponse> => {
    const url = 'some url to be separated into a config / env file'
    return axios.post(url, payload)
}

const closeRoom = (payload: CloseRoomPayload): Promise<CloseRoomResponse> => {
    const url = 'some url to be separated into a config / env file'
    return axios.post(url, payload)
}

const RoomAPIImpl : IRoomAPI = {
    createRoom: createRoom,
    getRoomStatus: getRoomStatus,
    submitVote: submitVote,
    getFoodList: getFoodList,
    getRoomResults: getRoomResults,
    closeRoom: closeRoom
}

export default RoomAPIImpl
