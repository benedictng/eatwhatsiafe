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
                    src={`data:image/jpeg;base64,${secondResult.food_details.photos[0]}`}
                    alt="restaurant food"
                />
            </Grid>
            <Grid item sm={6}>
                <div className="block">
                    <h1>
                        2.
                        {' '}
                        {secondResult.food_details.name}
                    </h1>
                    <p>{secondResult.food_details.address}</p>
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
