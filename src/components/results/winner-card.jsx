import Grid from '@mui/material/Grid';
import './results.css';

import Box from '@mui/material/Box';
import { EwsH1, EwsH2, EwsP } from 'components/common/typography/text-components';
import GreyTextHighlightBox from 'components/common/grey-text-highlight-box';
// Class name image is in react bootstrap

const WinnerCard = ({ result, placing }) => (
    <Grid container spacing={3}>
        <Grid item sm={6} className="horizontal-center">
            <div className="imgContain">
                <img
                    className="results_image"
                    src={`data:image/jpeg;base64,${result.food_details.photos[0]}`}
                    alt="restaurant food"
                />
            </div>
        </Grid>
        <Grid item sm={6}>
            <div className="block">
                <Box mb={2}>
                    <EwsH1>
                        {`${placing}. ${result.food_details.name}`}
                    </EwsH1>
                </Box>
                <Box mb={3}>
                    <EwsP>{result.food_details.address}</EwsP>
                </Box>
            </div>
            <Box mb={3}>
                <EwsH2>
                    Suckers who voted
                </EwsH2>
            </Box>
            <Box mb={2}>
                {result.voted_users.map((user) => (
                    <GreyTextHighlightBox>
                        <EwsP>{user}</EwsP>
                    </GreyTextHighlightBox>
                ))}
            </Box>
        </Grid>
    </Grid>
);

export default WinnerCard;
