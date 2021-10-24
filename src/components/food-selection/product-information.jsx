import locationPresetData from '../../common/constants/location-preset-data';

const ProductInformation = ({
    name, address, location, hours,
}) => (
    <>
        <div className="">
            <h1>{name}</h1>
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
