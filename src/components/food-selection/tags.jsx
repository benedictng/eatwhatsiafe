import cuisinePresetData from 'common/constants/cuisine-preset-data'
import dietRestrictPresetData from 'common/constants/diet-restriction-preset-data'

import Grid from '@material-ui/core/Grid';

import './food-selection.css'

const tags = ({ cuisineType, restriction }) => {
    const cuisineNDType = [...new Set(cuisineType)];
    const restrictionND = [...new Set(restriction)];

    return (
        <>
            <Grid container className="tag-group">
                {cuisineNDType.map((cuisineTag) => (

                    <p className="tag">
                        {cuisinePresetData.enum2[cuisineTag]}
                    </p>
                ))}

                {restrictionND.map((dietaryTag) => (
                    <p className="tag">
                        {dietRestrictPresetData.enum2[dietaryTag]}
                    </p>
                ))}
            </Grid>
        </>
    )
};

export default tags;
