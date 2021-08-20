import { IRoomAPI, CreateRoomPayload, CreateRoomResponse, RoomStatusPayload, RoomStatusResponse, SubmitVotePayload, SubmitVoteResponse, FoodListPayload, FoodListResponse, CloseRoomPayload, CloseRoomResponse } from './room_api_interface'

const createRoom = (payload: CreateRoomPayload): Promise<CreateRoomResponse>  => {
    return new Promise((res, rej) => {
        setTimeout(
            () => res(MockData.CreateRoomResponse),
            1000
        )
        // error when payload is wrong format?
    })
}

const getRoomStatus = (payload: RoomStatusPayload): Promise<RoomStatusResponse> => {
    return new Promise((res, rej) => {
        setTimeout(
            () => res(MockData.RoomStatusResponse),
            1000
        )
        // error when payload is wrong format?
    })
}

const submitVote = (payload: SubmitVotePayload): Promise<SubmitVoteResponse> => {
    return new Promise((res, rej) => {
        setTimeout(
            () => res(MockData.SubmitVoteResponse),
            1000
        )
        // error when payload is wrong format?
    })
}

const getFoodList = (payload: FoodListPayload): Promise<FoodListResponse> => {
    return new Promise((res, rej) => {
        setTimeout(
            () => res(MockData.FoodListResponse),
            1000
        )
        // error when payload is wrong format?
    })
}

const closeRoom = (payload: CloseRoomPayload): Promise<CloseRoomResponse> => {
    return new Promise((res, rej) => {
        setTimeout(
            () => res(MockData.CloseRoomResponse),
            1000
        )
        // error when payload is wrong format?
    })
}

const MockRoomAPI: IRoomAPI = {
    createRoom: createRoom,
    getRoomStatus: getRoomStatus,
    submitVote: submitVote,
    getFoodList: getFoodList,
    closeRoom: closeRoom
}

const MockData = {
    CreateRoomResponse: {
        error_code: 0,
        error_msg: '',
        data: {
            room_code: 'ABCD'
        }
    },

    RoomStatusResponse: {
        error_code: 0,
        error_msg: '',
        data: {
            room_name: 'Lonch with Greg',
            status: 1,
            voted_users: ['Mary', 'Amy'],
            host_username: 'Greg'
        }
    },

    SubmitVoteResponse: {
        error_code: 0,
        error_msg: ''
    },

    FoodListResponse: {
        error_code: 0,
        error_msg: '',
        data: {
            food_list: [
            {
                food_id: 1111,
                name: 'Delicious Kebabs',
                address: '52 Kranji Road, Singapore 622111',
                region: 4,
                average_rating: 4.08,
                price_level: 1,
                dining_type: 2,
                opening_hours: [
                    'Monday: 10:00 AM – 10:00 PM',
                    'Tuesday: 10:00 AM – 10:00 PM',
                    'Wednesday: 10:00 AM – 10:00 PM',
                    'Thursday: 10:00 AM – 10:00 PM',
                    'Friday: 10:00 AM – 10:00 PM',
                    'Saturday: 10:00 AM – 10:00 PM',
                    'Sunday: 10:00 AM – 10:00 PM',
                ],
                cuisine_type: [1, 4],
                restrictions:[2, 3],
                photos:[
                    'AJFPAISIOasdASOIDJAKJJDOSAoiasjidjPAOISJsdjJAOIIDJASdhosapA',
                    'AJFPAISIOasdASOIDJAKJJDOSAoiasjidjPAOISJsdjJAOIIDJASdhosapA',
                ],
                reviews:[
                    {
                        rating: 3,
                        comment: 'decent meal, affordable'
                    },
                    {
                        rating: 4,
                        comment: 'nice kebabs will come back again'
                    }
                ]
            },
            {
                food_id: 1551,
                name: 'Mala Hotpot',
                address: '1 Bedok Street, Singapore 617834',
                region: 6,
                average_rating: 4.68,
                price_level: 3,
                dining_type: 2,
                opening_hours: [
                    'Monday: 10:00 AM – 10:00 PM',
                    'Tuesday: 10:00 AM – 10:00 PM',
                    'Wednesday: 10:00 AM – 10:00 PM',
                    'Thursday: 10:00 AM – 10:00 PM',
                    'Friday: 10:00 AM – 10:00 PM',
                    'Saturday: 10:00 AM – 10:00 PM',
                    'Sunday: 10:00 AM – 10:00 PM',
                ],
                cuisine_type: [2],
                restrictions:[1, 3],
                photos:[
                    'AJFPAISIOasdASOIDJAKJJDOSAoiasjidjPAOISJsdjJAOIIDJASdhosapA',
                    'AJFPAISIOasdASOIDJAKJJDOSAoiasjidjPAOISJsdjJAOIIDJASdhosapA',
                ],
                reviews:[
                    {
                        rating: 5,
                        comment: '又辣又香，我的最爱'
                    },
                    {
                        rating: 4,
                        comment: 'pretty good but NTU can 9 is better'
                    }
                ]
            }]
        }
    },

    CloseRoomResponse: {
        error_code: 0,
        error_msg: ''
    }
}

export default MockRoomAPI
