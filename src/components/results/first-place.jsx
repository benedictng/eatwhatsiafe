import Grid from '@mui/material/Grid';
import './results.css';

import Box from '@mui/material/Box';
import { EwsH1, EwsH2, EwsP } from 'components/common/typography/text-components';
// Class name image is in react bootstrap

const FirstPlace = ({ firstResult }) => (
    <>
        <Grid container spacing={3}>
            <Grid item sm={6} className="horizontalcenter">
                <div className="imgContain">
                    <img
                        className="results_image"
                        src={`data:image/jpeg;base64,${firstResult.food_details.photos[0]}`}
                        alt="restaurant food"
                    />
                </div>
            </Grid>
            <Grid item sm={6}>
                <div className="block">
                    <Box mb={2}>
                        <EwsH1>
                            1.
                            {' '}
                            {firstResult.food_details.name}
                        </EwsH1>
                    </Box>
                    <Box mb={3}>
                        <EwsP>{firstResult.food_details.address}</EwsP>
                    </Box>
                </div>
                <Box mb={3}>
                    <EwsH2>
                        Suckers who voted
                    </EwsH2>
                </Box>
                <Box mb={2}>
                    <EwsP>
                        {firstResult.voted_users}
                    </EwsP>
                </Box>

                {/* {first_results.food_details.voted_users.map((voters, id) => (
          <EwsH3>{voters}</EwsH3>
        ))} */}
            </Grid>
        </Grid>
    </>
);

export default FirstPlace;
