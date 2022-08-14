import cuisinePresetData from 'common/constants/cuisine-preset-data'
import dietRestrictPresetData from 'common/constants/diet-restriction-preset-data'

import Grid from '@mui/material/Grid';

import './food-selection.css'
import { EwsP } from 'components/common/typography/text-components';

const tags = ({ cuisineType, restriction }) => {
    const cuisineNDType = [...new Set(cuisineType)];
    const restrictionND = [...new Set(restriction)];

    return (
        <>
            <Grid container spacing={2} className="tag-group">
                {cuisineNDType.map((cuisineTag) => (
                    <Grid item>
                        <EwsP className="tag" key={cuisineTag}>
                            {cuisinePresetData.enum2[cuisineTag]}
                        </EwsP>
                    </Grid>
                ))}

                {restrictionND.map((dietaryTag) => (
                    <Grid item>
                        <EwsP className="tag" key={dietaryTag}>
                            {dietRestrictPresetData.enum2[dietaryTag]}
                        </EwsP>
                    </Grid>
                ))}
            </Grid>
        </>
    )
};

export default tags;
