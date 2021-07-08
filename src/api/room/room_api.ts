export interface IRoomAPI {
    /**
     * Makes a POST request to create a room
     * 
     * Usage: createRoom(payload).then(response => {your logic here..}).catch(error => {handle error here})
     */
    createRoom: (payload: CreateRoomPayload) => Promise<CreateRoomResponse>
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
