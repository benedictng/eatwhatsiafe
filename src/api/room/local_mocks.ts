/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    IRoomAPI,
    CreateRoomPayload, CreateRoomResponse, RoomStatusPayload, RoomStatusResponse,
    SubmitVotePayload, SubmitVoteResponse, FoodListPayload, FoodListResponse,
    CloseRoomPayload, CloseRoomResponse, RoomResultsPayload, RoomResultsResponse,
} from './room_api_interface'

import {
    image1, image2, image3, image4,
} from './mock_image'

const createRoom = (payload: CreateRoomPayload): Promise<CreateRoomResponse> => new Promise(
    (res, rej) => {
        setTimeout(
            () => res(MockData.CreateRoomResponse),
            1000,
        )
    // error when payload is wrong format?
    },
)

const getRoomStatus = (payload: RoomStatusPayload): Promise<RoomStatusResponse> => new Promise(
    (res, rej) => {
        setTimeout(
            () => res(getMockedRoomStatus(payload.room_code)),
            1000,
        )
    // error when payload is wrong format?
    },
)

const submitVote = (payload: SubmitVotePayload): Promise<SubmitVoteResponse> => new Promise(
    (res, rej) => {
        setTimeout(
            () => res(MockData.SubmitVoteResponse),
            1000,
        )
        // error when payload is wrong format?
    },
)

const getFoodList = (payload: FoodListPayload): Promise<FoodListResponse> => new Promise(
    (res, rej) => {
        setTimeout(
            () => res(MockData.FoodListResponse),
            1000,
        )
        // error when payload is wrong format?
    },
)

const getRoomResults = (payload: RoomResultsPayload): Promise<RoomResultsResponse> => new Promise(
    (res, rej) => {
        setTimeout(
            () => res(MockData.RoomResultsResponse),
            1000,
        )
        // error when payload is wrong format?
    },
)

const closeRoom = (payload: CloseRoomPayload): Promise<CloseRoomResponse> => new Promise(
    (res, rej) => {
        setTimeout(
            () => res(MockData.CloseRoomResponse),
            1000,
        )
        // error when payload is wrong format?
    },
)

const MockRoomAPI: IRoomAPI = {
    createRoom,
    getRoomStatus,
    submitVote,
    getFoodList,
    getRoomResults,
    closeRoom,
}

const getMockedRoomStatus = (roomCode: string): RoomStatusResponse => {
    let status: number
    switch (roomCode.toUpperCase()) {
    case 'ERROR':
        status = 4
        break
    case 'DELETED':
        status = 3
        break
    case 'CLOSED':
        status = 2
        break
    default:
        status = 1
    }

    return {
        error_code: 0,
        error_msg: '',
        data: {
            room_name: 'Lonch with Greg',
            status,
            voted_users: ['Mary', 'Amy', 'Boon', 'Richard the Rich'],
            host_username: 'Greg',
        },
    }
}

const MockFoodList = [
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
        restrictions: [2, 3],
        photos: [
            image1, image2,
        ],
        reviews: [
            {
                rating: 3,
                comment: 'decent meal, affordable',
            },
            {
                rating: 4,
                comment: 'nice kebabs will come back again',
            },
            {
                rating: 4,
                comment: 'nice kebabs will come back again',
            },
            {
                rating: 4,
                comment: 'nice kebabs will come back again',
            },
        ],
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
        restrictions: [1, 3],
        photos: [
            image1, image2, image3, image4,
        ],
        reviews: [
            {
                rating: 5,
                comment: '又辣又香，我的最爱',
            },
            {
                rating: 4,
                comment: 'pretty good but NTU can 9 is better',
            },
            {
                rating: 4,
                comment: 'pretty good but NTU can 9 is better',
            },
            {
                rating: 4,
                comment: 'pretty good but NTU can 9 is better',
            },
        ],
    },
    {
        food_id: 1345,
        name: 'Mr Biryani',
        address: '32 Norris Rd, Singapore 208274',
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
        restrictions: [2, 3],
        photos: [
            image1, image2, image4,
        ],
        reviews: [
            {
                rating: 3,
                comment: 'lalalalallalal',
            },
            {
                rating: 3,
                comment: 'lalalalallalal',
            },
            {
                rating: 3,
                comment: 'lalalalallalal',
            },
            {
                rating: 3,
                comment: 'lalalalallalal',
            },
        ],
    },
]

const MockData = {
    CreateRoomResponse: {
        error_code: 0,
        error_msg: '',
        data: {
            room_code: 'ABCD',
        },
    },

    SubmitVoteResponse: {
        error_code: 0,
        error_msg: '',
    },

    FoodListResponse: {
        error_code: 0,
        error_msg: '',
        data: {
            food_list: MockFoodList,
        },
    },

    RoomResultsResponse: {
        error_code: 0,
        error_msg: '',
        data: {
            results_conclusive: true,
            results: [
                {
                    rank: 1,
                    voted_users: ['Mary', 'Sue'],
                    food_details: MockFoodList[0],
                },
                {
                    rank: 2,
                    voted_users: ['Gary', 'Snail'],
                    food_details: MockFoodList[1],
                },
                {
                    rank: 3,
                    voted_users: ['Boon', 'Ben', 'Bong'],
                    food_details: MockFoodList[2],
                },
            ],
        },
    },

    CloseRoomResponse: {
        error_code: 0,
        error_msg: '',
    },
}

export default MockRoomAPI
