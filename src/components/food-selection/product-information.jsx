import Grid from '@material-ui/core/Grid';

import locationPresetData from '../../common/constants/location-preset-data';
import Tags from './tags';

const ProductInformation = ({
    name, location, hours, cuisineType, restriction,
}) => (
    <>
        <div>
            <h1>{name}</h1>
            <Tags
                cuisineType={cuisineType}
                restriction={restriction}
            />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <h3>Region:</h3>
                </Grid>
                <Grid item xs={6}>
                    <p>{locationPresetData.enum2[location]}</p>
                </Grid>
                <Grid item xs={6}>
                    <h3>Opening Hours:</h3>
                </Grid>
                <Grid item xs={6}>
                    {hours.map((hour) => (
                        <p>{hour}</p>
                    ))}
                </Grid>
            </Grid>
        </div>
    </>
);
export default ProductInformation;
