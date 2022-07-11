import Grid from '@material-ui/core/Grid';
import './results.css';

import Box from '@mui/material/Box';
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
                        <h1>
                            1.
                            {' '}
                            {firstResult.food_details.name}
                        </h1>
                    </Box>
                    <Box mb={3}>
                        <p>{firstResult.food_details.address}</p>
                    </Box>
                </div>
                <Box mb={3}>
                    <h2>
                        Suckers who voted
                    </h2>
                </Box>
                <Box mb={2}>
                    <p>
                        Who voted:
                        {firstResult.voted_users}
                    </p>
                </Box>

                {/* {first_results.food_details.voted_users.map((voters, id) => (
          <h3>{voters}</h3>
        ))} */}
            </Grid>
        </Grid>
    </>
);

export default FirstPlace;
