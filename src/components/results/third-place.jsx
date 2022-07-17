import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import './results.css';
import { EwsH1, EwsH2, EwsP } from 'components/common/typography/text-components';

// Class name image is in react bootstrap

const ThirdPlace = ({ thirdResult }) => (
    <>
        <Grid container spacing={3}>
            <Grid item sm={6} className="horizontalcenter">
                <img
                    className="results_image"
                    src={`data:image/jpeg;base64,${thirdResult.food_details.photos[0]}`}
                    alt="restaurant food"
                />
            </Grid>
            <Grid item sm={6}>
                <div className="block">
                    <Box mb={2}>
                        <EwsH1>
                            3.
                            {' '}
                            {thirdResult.food_details.name}
                        </EwsH1>
                    </Box>
                    <Box mb={3}>
                        <EwsP>{thirdResult.food_details.address}</EwsP>
                    </Box>
                </div>
                <Box mb={3}>
                    <EwsH2>
                        Suckers who voted
                    </EwsH2>
                </Box>
                <Box mb={2}>
                    <EwsP>
                        {thirdResult.voted_users}
                    </EwsP>
                </Box>
            </Grid>
        </Grid>
    </>
);

export default ThirdPlace;
