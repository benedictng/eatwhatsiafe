import cuisinePresetData from 'common/constants/cuisine-preset-data'
import dietRestrictPresetData from 'common/constants/diet-restriction-preset-data'

import Grid from '@material-ui/core/Grid';

import './food-selection.css'

const tags = ({ cuisineType, restriction }) => (
    <>
        <Grid container className="tag-group">
            {cuisineType.map((cuisineTag) => (
                <p className="tag">
                    {cuisinePresetData.enum2[cuisineTag]}
                </p>
            ))}

            {restriction.map((dietaryTag) => (
                <p className="tag">
                    {dietRestrictPresetData.enum2[dietaryTag]}
                </p>
            ))}
        </Grid>
    </>
);

export default tags;
