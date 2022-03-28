export interface IRoomAPI {
    createRoom: (payload: CreateRoomPayload) => Promise<CreateRoomResponse>,
    getRoomStatus: (payload: RoomStatusPayload) => Promise<RoomStatusResponse>,
    submitVote: (payload: SubmitVotePayload) => Promise<SubmitVoteResponse>
    getFoodList: (payload: FoodListPayload) => Promise<FoodListResponse>,
    getRoomResults: (payload: RoomResultsPayload) => Promise<RoomResultsResponse>,
    closeRoom: (payload: CloseRoomPayload) => Promise<CloseRoomResponse>
}

export interface CreateRoomPayload {
    'room_name': string,
    'host_username': string,
    'regions': number,
    'price_levels': number[],
    'cuisine_types': number[],
    'dining_types': number[],
    'dietary_restrictions': number[]
}

export interface CreateRoomResponse {
    'data': {
        'error_code': number,
        'error_msg': string,
        'data': {
            'room_code': string
        }
    }
}

export interface RoomStatusPayload {
    'room_code': string
}

export interface RoomStatusResponse {
    'data': {
        'error_code': number
        'error_msg': string
        'data': {
            'room_name': string
            'status': number
            'voted_users': string[]
            'host_username': string
        }
    }
}

export interface SubmitVotePayload {
    'room_code': string,
    'food_ids': number[],
    'username': string
}

export interface SubmitVoteResponse {
    'error_code': number,
    'error_msg': string
}

export interface FoodListPayload {
    'room_code': string
}

export interface FoodListResponse {
    'data': {
        'error_code': number
        'error_msg': string
        'data': {
            'food_list': Food[]
        }
    }
}

export interface Food {
    'food_id': number
    'name': string
    'address': string
    'region': number
    'average_rating': number
    'price_level': number
    'dining_type': number
    'opening_hours': string[]
    'cuisine_type': number[]
    'restrictions': number[]
    'photos': string[]
    'reviews': Array<{
        'rating': number
        'comment': string
    }>
}

export interface RoomResultsPayload {
    'room_code': string
}

export interface RoomResultsResponse {
    'error_code': number
    'error_msg': string
    'data': {
        'results_conclusive': boolean
        'results': Array<{
            'rank': number
            'voted_users': string[]
            'food_details': Food
        }>
    }
}

export interface CloseRoomPayload {
    'room_code': string
}

export interface CloseRoomResponse {
    'error_code': number
    'error_msg': string
}
