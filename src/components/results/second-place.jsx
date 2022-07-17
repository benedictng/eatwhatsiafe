import React from 'react';
import Grid from '@mui/material/Grid';

import './results.css';

import Box from '@mui/material/Box';
import { EwsH1, EwsH2, EwsP } from 'components/common/typography/text-components';

// Class name image is in react bootstrap

const SecondPlace = ({ secondResult }) => (
    <>
        <Grid container spacing={3}>
            <Grid item sm={6} className="horizontalcenter">
                <img
                    className="results_image"
                    src={`data:image/jpeg;base64,${secondResult.food_details.photos[0]}`}
                    alt="restaurant food"
                />
            </Grid>
            <Grid item sm={6}>
                <div className="block">
                    <Box mb={2}>
                        <EwsH1>
                            2.
                            {' '}
                            {secondResult.food_details.name}
                        </EwsH1>
                    </Box>
                    <Box mb={3}>
                        <EwsP>{secondResult.food_details.address}</EwsP>
                    </Box>
                </div>
                <Box mb={3}>
                    <EwsH2>Suckers who voted</EwsH2>
                </Box>
                <Box mb={2}>
                    <EwsP>
                        {secondResult.voted_users}
                    </EwsP>
                </Box>
            </Grid>
        </Grid>
    </>
);

export default SecondPlace;
