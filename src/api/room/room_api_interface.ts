export interface IRoomAPI {
    createRoom: (payload: CreateRoomPayload) => Promise<CreateRoomResponse>,
    getRoomStatus: (payload: RoomStatusPayload) => Promise<RoomStatusResponse>,
    submitVote: (payload: SubmitVotePayload) => Promise<SubmitVoteResponse>
    getFoodList: (payload: FoodListPayload) => Promise<FoodListResponse>
}

export interface CreateRoomPayload {
    room_name: string,
    host_username: string,
    region: number,
    price_levels: number[],
    cuisine_types: number[],
    dining_types: number[],
    dietary_restrictions: number[]
}

export interface CreateRoomResponse {
    error_code: number,
    error_msg: string,
    data: {
        room_code: string
    }
}

export interface RoomStatusPayload {
    room_code: string
}

export interface RoomStatusResponse {
    error_code: number
    error_msg: string
    data: {
        room_name: string
        status: number
        voted_users: string[]
        host_username: string
    }
}

export interface SubmitVotePayload {
    room_code: string,
    food_ids: number[],
    username: string

}

export interface SubmitVoteResponse {
    error_code: number,
    error_msg: string
}

export interface FoodListPayload {
    room_code: string
}

export interface FoodListResponse {
    error_code: number
    error_msg: string
    data: {
        food_list: Array<{
            food_id: number
            name: string
            address: string
            region : number
            average_rating: number
            price_level: number
            dining_type: number
            opening_hours: string[]
            cuisine_type: number[]
            restrictions: number[]
            photos: string[]
            reviews: Array<{
                rating: number
                comment: string
            }>
        }>
    }
}

/**
 * Request Body:

Response Body:


Sample Response:
{
    error_code: 0
    error_msg: ""
}
 * 
 */