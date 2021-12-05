import locationPresetData from '../../common/constants/location-preset-data';
import Tags from './tags';

const ProductInformation = ({
    name, address, location, hours, cuisineType, restriction,
}) => (
    <>
        <div>
            <h1 className="fonttt">{name}</h1>
            <Tags
                cuisineType={cuisineType}
                restriction={restriction}
            />
            <h3>Opening Hours:</h3>
            {hours.map((hour) => (
                <p>{hour}</p>
            ))}
            <h3>Address:</h3>
            <p>{address}</p>
            <h3>Region:</h3>
            <p>{locationPresetData.enum2[location]}</p>
        </div>
    </>
);
export default ProductInformation;
