/* eslint-disable @typescript-eslint/no-unused-vars, camelcase, max-len */
import {
    IRoomAPI,
    CreateRoomPayload, CreateRoomResponse, RoomStatusPayload, RoomStatusResponse,
    SubmitVotePayload, SubmitVoteResponse, FoodListPayload, FoodListResponse,
    CloseRoomPayload, CloseRoomResponse, RoomResultsPayload, RoomResultsResponse,
} from './room_api_interface'

import {
    image1, image2, image3, image4, image5, image6,
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
    let error_msg = ''
    let error_code = 0
    switch (roomCode.toUpperCase()) {
    case 'ERROR':
        status = 0
        error_msg = 'glitchpaw mice are on the loose'
        error_code = 5
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
        error_code,
        error_msg,
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
            'Sun: 1100 - 1430',
            'Sun: 1730 - 2230',
            'Mon: 1100 - 1431',
            'Mon: 1730 - 2231',
            'Tue: 1100 - 1432',
            'Tue: 1730 - 2232',
            'Wed: 1100 - 1433',
            'Wed: 1730 - 2233',
            'Thu: 1100 - 1434',
            'Thu: 1730 - 2234',
            'Fri: 1100 - 1435',
            'Fri: 1730 - 2235',
            'Sat: 1100 - 1436',
            'Sat: 1730 - 2236',
        ],
        cuisine_type: [2],
        restrictions: [1, 3],
        photos: [
            image5, image6, image3, image4,
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
            'Mon: 1000 AM - 1200 PM',
            'Mon: 1300 AM - 2000 PM',
            'Tue: 1000 AM - 1200 PM',
            'Tue: 1300 AM - 2000 PM',
            'Wed: 1000 AM - 1200 PM',
            'Wed: 1300 AM - 2000 PM',
            'Thu: 1000 AM - 1200 PM',
            'Thu: 1300 AM - 2000 PM',
            'Fri: 1000 AM - 1200 PM',
            'Fri: 1300 AM - 2000 PM',
            'Sat: 1000 AM - 1200 PM',
            'Sat: 1300 AM - 2000 PM',
            'Sun: 1000 AM - 1200 PM',
            'Sun: 1300 AM - 2000 PM',
        ],
        cuisine_type: [1, 4, 4, 4, 4],
        restrictions: [1, 1, 2, 2, 3, 3],
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
                    voted_users: ['happy', 'tree', 'buddies'],
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
