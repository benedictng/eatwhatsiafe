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
            () => res(getMockedRoomStatus(payload.room_code)),
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

const getMockedRoomStatus = (roomCode: string): RoomStatusResponse => {
    let status: number
    switch(roomCode.toUpperCase()) {
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
            status: status,
            voted_users: ['Mary', 'Amy', 'Boon', 'Richard the Rich'],
            host_username: 'Greg'
        }
    }
}

const MockData = {
    CreateRoomResponse: {
        error_code: 0,
        error_msg: '',
        data: {
            room_code: 'ABCD'
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
                    "Monday: 10:00 AM – 10:00 PM",
                    "Tuesday: 10:00 AM – 10:00 PM",
                    "Wednesday: 10:00 AM – 10:00 PM",
                    "Thursday: 10:00 AM – 10:00 PM",
                    "Friday: 10:00 AM – 10:00 PM",
                    "Saturday: 10:00 AM – 10:00 PM",
                    "Sunday: 10:00 AM – 10:00 PM",
                ],
                cuisine_type: [1, 4],
                restrictions:[2, 3],
                photos:[
                    "https://danielfooddiary.com/wp-content/uploads/2020/03/twomenbagelhouse1.jpg",
                    "https://www.misstamchiak.com/wp-content/uploads/2019/11/DSCF0483-3-e1573616926486.jpg",
                ],
                reviews:[
                    {
                        rating: 3,
                        comment: "decent meal, affordable"
                    },
                    {
                        rating: 4,
                        comment: "Popped by for some take away for a picnic early Sat morning. They open at 9am, I reached at 9.02am and there already was a queue! Mind blowing! I never fancied a bagel so I didnt know what the big deal was. The set up is pretty simple, order from the menu, choose your bun and add extra toppings is youd like. Its quite pricey but the serving is substantial! We ate half for breakfast and the other half for brunch hahahha! These guys have done something right because ever since I had my first bagel here, thats all Ive been thinking of. Thank god I stay nearby. Ill definitely return and will specially make a trip down!"
                    },
                    {
                        rating: 4,
                        comment: "A longtime favorite, some of the best culture/service/atmosphere in Singapore. Friendly staff engage with customers and clearly have fun together as well, great spot."
                    },
                    {
                        rating: 4,
                        comment: "Haven't had TMBH in over a year and wasn't disappointed. Bagel is toasted to perfection and the generous filling is so tasty. I got the Sir Nels' (sage feta, egg, avocado, and tomato on a wholegrain bagel). Staff were lovely as well. Only complaint is that the sage feta is a tad too salty for me."
                    }
                ]
            },
            {
                food_id: 1551,
                name: "Man Man Japanese Unagi Restaurant",
                address: "1 Bedok Street, Singapore 617834",
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
                    "https://cdn.shortpixel.ai/client/to_avif,q_glossy,ret_img,w_450,h_300/https://danielfooddiary.com/wp-content/uploads/2017/10/manman41.jpg",
                    "https://media-cdn.tripadvisor.com/media/photo-s/0f/1f/3c/ef/photo0jpg.jpg",
                    "https://4.bp.blogspot.com/-pG2QheJoPqI/V_4KOTSNEzI/AAAAAAAANPY/IUhqvk2tHg8YRouAzOmrII0tXF1WdVvawCLcB/s1600/umDSCF9361.JPG",
                    "https://live.staticflickr.com/65535/48290857847_ef5efeecd1_b.jpg"
                ],
                reviews:[
                    {
                        rating: 5,
                        comment: '又辣又香，我的最爱'
                    },
                    {
                        rating: 4,
                        comment: 'pretty good but NTU can 9 is better'
                    },
                    {
                        rating: 4,
                        comment: "pretty good but NTU can 9 is better"
                    },
                    {
                        rating: 4,
                        comment: "pretty good but NTU can 9 is better"
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
