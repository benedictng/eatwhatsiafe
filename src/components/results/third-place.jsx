import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';

import './results.css';

// Class name image is in react bootstrap

const ThirdPlace = ({ thirdResult }) => (
    <>
        <Grid container spacing={3}>
            <Grid item lg={6} className="horizontalcenter">
                <div className="imgContain">
                    <img
                        className="results_image"
                        src={`data:image/jpeg;base64,${thirdResult.food_details.photos[0]}`}
                        alt="restaurant food"
                    />
                </div>
            </Grid>
            <Grid item lg={6}>
                <div className="block">
                    <Box mb={2}>
                        <h1>
                            3.
                            {' '}
                            {thirdResult.food_details.name}
                        </h1>
                    </Box>
                    <Box mb={3}>
                        <p>{thirdResult.food_details.address}</p>

                    </Box>
                </div>
                <Box mb={3}>
                    <h2>
                        Who voted:
                    </h2>
                </Box>
                <Box mb={2}>
                    <p>
                        {thirdResult.voted_users}
                    </p>
                </Box>
            </Grid>
        </Grid>
    </>
);

export default ThirdPlace;
