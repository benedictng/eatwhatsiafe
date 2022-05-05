import Grid from '@material-ui/core/Grid';

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
            <p key={day}>{`${day}: ${openingHours}`}</p>
        ))
    }

    return (
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
                        {hours ? combineDuplicateDays(hours) : null}
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default ProductInformation;
