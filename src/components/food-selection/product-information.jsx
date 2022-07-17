import Grid from '@mui/material/Grid';
import { EwsH1, EwsH3, EwsP } from 'components/common/typography/text-components';

import locationPresetData from '../../common/constants/location-preset-data';
import Tags from './tags';

const ProductInformation = ({
    name, location, hours, cuisineType, restriction,
}) => {
    function combineDuplicateDays(openingHoursArray) {
        const openingHoursMap = new Map()
        openingHoursArray.forEach((entry) => {
            const [day, timeslot] = entry.split(': ')
            if (openingHoursMap.has(day)) {
                openingHoursMap.set(day, `${openingHoursMap.get(day)}, ${timeslot}`)
            } else {
                openingHoursMap.set(day, timeslot)
            }
        })

        return Array.from(openingHoursMap, ([day, openingHours]) => (
            <EwsP key={day}>{`${day}: ${openingHours}`}</EwsP>
        ))
    }

    return (
        <>
            <div>
                <EwsH1>{name}</EwsH1>
                <Tags
                    cuisineType={cuisineType}
                    restriction={restriction}
                />
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <EwsH3>Region:</EwsH3>
                    </Grid>
                    <Grid item xs={8}>
                        <EwsP>{locationPresetData.enum2[location]}</EwsP>
                    </Grid>
                    <Grid item xs={4}>
                        <EwsH3>Opening Hours:</EwsH3>
                    </Grid>
                    <Grid item xs={8}>
                        {hours ? combineDuplicateDays(hours) : null}
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default ProductInformation;
