import React from 'react';
import Grid from '@material-ui/core/Grid';

import './results.css';

// Class name image is in react bootstrap

const ThirdPlace = ({ thirdResult }) => (
    <>
        <Grid container>
            <Grid item lg={6} className="horizontalcenter">
                <img
                    className="results_image"
                    src={thirdResult.food.photos[0]}
                    alt="restaurant food"
                />
            </Grid>
            <Grid item lg={6}>
                <div className="block">
                    <h1>
                        3.
                        {' '}
                        {thirdResult.food.name}
                    </h1>
                    <p>{thirdResult.food.address}</p>
                </div>
                <h2>
                    Who voted:
                </h2>
                <p>
                    {thirdResult.voted_users}
                </p>
            </Grid>
        </Grid>
    </>
);

export default ThirdPlace;
