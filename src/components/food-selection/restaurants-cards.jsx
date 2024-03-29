import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import RoomAPI from 'api/room';
import Loading from 'components/common/loading';
import { EwsH2 } from 'components/common/typography/text-components';
import RestaurantCard from './restaurant-card';

const RestaurantsCards = () => {
    const [allData, setAllData] = useState({});
    const [loaded, setLoaded] = useState(false);
    const { roomCode } = useParams();
    const history = useHistory();

    useEffect(() => RoomAPI.getFoodList({ room_code: roomCode })
        .then((res) => {
            setAllData(res.data);
            setLoaded(true);
        }), [roomCode]);

    // () can replace return
    // "return" returns a html / UI
    const [currentPage, setCurrentPage] = useState(0);
    const currentRestaurant = loaded ? allData.food_list[currentPage] : null;
    const totalRestaurants = loaded ? allData.food_list.length : null;

    const [selections, setSelections] = useState([]);
    // cannot put hooks in javascript functions

    /*
    const prevents reassignment.
    so u cant define const as a and do a = a.concat because this will reassign a's value.
    x = a.concat will help remain a's original array state,
    but x will take over the concatenated state
    a.push however, will add on to a's array and modify original array
    for state arrays, you have to concat because setState's function is innately reassignment
    */

    function recordNextPage() {
    // selection.push(currentRestaurant.food_id);
    // ^ not a good idea because you cannot set currentRestaurant as an empty array without it being a global variable.
        const newSelections = selections.concat(currentRestaurant.food_id.toString());
        setSelections(newSelections);

        if (currentPage < totalRestaurants - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            RoomAPI.submitVote({
                username: window.sessionStorage.getItem('name'),
                room_code: roomCode,
                food_ids: selections,
            }).then((res) => {
                if (res.error_code === 0) {
                    history.push(`/room/${roomCode}`, history.location.state);
                }
            });
        }
    }

    function nextPage() {
        if (currentPage < totalRestaurants - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            RoomAPI.submitVote({
                username: window.sessionStorage.getItem('name'),
                room_code: roomCode,
                food_ids: selections,
            }).then((res) => {
                if (res.error_code === 0) {
                    history.push(`/room/${roomCode}`, history.location.state);
                }
            });
        }
    }

    function renderContentOrLoading() {
        if (loaded) {
            return (
                <Container>
                    <RestaurantCard
                        restaurant={currentRestaurant}
                        key={currentRestaurant.food_id}
                    />

                    <Grid container className="selectionControl lockup">

                        <Grid item>
                            <Button
                                type="button"
                                variant="outlined"
                                className="selectionNo"
                                onClick={nextPage}
                            >
                                <EwsH2>NO</EwsH2>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                type="button"
                                className="selectionYes"
                                onClick={recordNextPage}
                                variant="outlined"
                            >
                                <EwsH2>
                                    YESSS
                                </EwsH2>
                            </Button>
                        </Grid>
                    </Grid>

                </Container>

            );
        }
        return <Loading />;
    }
    return <>{renderContentOrLoading()}</>;
};

export default RestaurantsCards;
