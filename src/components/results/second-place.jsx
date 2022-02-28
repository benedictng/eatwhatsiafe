import React from 'react';
import Grid from '@material-ui/core/Grid';

import './results.css';

// Class name image is in react bootstrap

const SecondPlace = ({ secondResult }) => (
    <>
        <Grid container>
            <Grid item sm={6} className="horizontalcenter">
                <img
                    className="results_image"
                    src={secondResult.food.photos[0]}
                    alt="restaurant food"
                />
            </Grid>
            <Grid item sm={6}>
                <div className="block">
                    <h1>
                        2.
                        {' '}
                        {secondResult.food.name}
                    </h1>
                    <p>{secondResult.food.address}</p>
                </div>

                <h2>Suckers who voted</h2>
                <p>
                    {secondResult.voted_users}
                </p>
            </Grid>
        </Grid>
    </>
);

export default SecondPlace;
