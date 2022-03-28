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
        data: {
            error_code: 0,
            error_msg: '',
            data: {
                room_name: 'Lonch with Greg',
                status,
                voted_users: ['Mary', 'Amy', 'Boon', 'Richard the Rich'],
                host_username: 'Greg',
            },
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
            'Mon: 1000 AM – 2000 PM',
            'Tue: 1000 AM – 2000 PM',
            'Wed: 1000 AM – 2000 PM',
            'Thu: 1000 AM – 2000 PM',
            'Fri: 1000 AM – 2000 PM',
            'Sat: 1000 AM – 2000 PM',
            'Sun: 1000 AM – 2000 PM',
        ],
        cuisine_type: [1, 4],
        restrictions: [2, 3],
        photos: [
            image1, image2,
        ],
        reviews: [
            {
                rating: 3,
                comment: 'decent meal, affordablecan’t recommend the food at Kebabchi enough. we thoroughly enjoyed every single item! each dish was so flavourful. the service and ambience was top notch too. we’ll definitely be back soon!',
            },
            {
                rating: 4,
                comment: 'Hearty food served in overly generous portions, good for groups! Every dish was much larger than we expected and we had no space left for dessert (and even had to get the naan packed to-go). Mango lassi was very fragrant - wonder what the secret is! Very cheap for such exotic fare in a prime location, will definitely be back.',
            },
            {
                rating: 4,
                comment: 'Best PAKISTANI food you can find in Singapore.Have been a regular customer for the amazing BBQ meat options. Their Nihari, Naans and Chapli kebabs are a must try. Usually packed with customers on weekends, please book in advance.',
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
            'Mon: 1000 AM – 2000 PM',
            'Tue: 1000 AM – 2000 PM',
            'Wed: 1000 AM – 2000 PM',
            'Thu: 1000 AM – 2000 PM',
            'Fri: 1000 AM – 2000 PM',
            'Sat: 1000 AM – 2000 PM',
            'Sun: 1000 AM – 2000 PM',
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
            'Mon: 1000 AM – 2000 PM',
            'Mon: 1000 AM – 2000 PM',
            'Tue: 1000 AM – 2000 PM',
            'Tue: 1000 AM – 2000 PM',
            'Wed: 1000 AM – 2000 PM',
            'Wed: 1000 AM – 2000 PM',
            'Thu: 1000 AM – 2000 PM',
            'Thu: 1000 AM – 2000 PM',
            'Fri: 1000 AM – 2000 PM',
            'Fri: 1000 AM – 2000 PM',
            'Sat: 1000 AM – 2000 PM',
            'Sat: 1000 AM – 2000 PM',
            'Sun: 1000 AM – 2000 PM',
            'Sun: 1000 AM – 2000 PM',
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
        data: {
            error_code: 0,
            error_msg: '',
            data: {
                room_code: 'ABCD',
            },
        },
    },

    SubmitVoteResponse: {
        error_code: 0,
        error_msg: '',
    },

    FoodListResponse: {
        data: {
            error_code: 0,
            error_msg: '',
            data: {
                food_list: MockFoodList,
            },
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
