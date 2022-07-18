import React from 'react';
import Grid from '@material-ui/core/Grid';

import './results.css';

import Box from '@mui/material/Box';

// Class name image is in react bootstrap

const SecondPlace = ({ secondResult }) => (
    <>
        <Grid container spacing={3}>
            <Grid item sm={6} className="horizontalcenter">
                <div className="imgContain">
                    <img
                        className="results_image"
                        src={`data:image/jpeg;base64,${secondResult.food_details.photos[0]}`}
                        alt="restaurant food"
                    />
                </div>
            </Grid>
            <Grid item sm={6}>

                <div className="block">
                    <Box mb={2}>
                        <h1>
                            2.
                            {' '}
                            {secondResult.food_details.name}
                        </h1>
                    </Box>
                    <Box mb={3}>
                        <p>{secondResult.food_details.address}</p>
                        {' '}

                    </Box>
                </div>
                <Box mb={3}>
                    <h2>Suckers who voted</h2>
                    {' '}

                </Box>
                <Box mb={2}>
                    <p>
                        {secondResult.voted_users}
                    </p>
                </Box>
            </Grid>
        </Grid>
    </>
);

export default SecondPlace;
