import React from "react";

const ProductInformation = ({name, address, mrt}) => {
    // const name = "Man Man Japanese Unagi Restaurant";
    // const hours = "11.30am - 3pm";
    // const price = "$$$";
    // const address = "1 Keong Saik Road";
    // const description = "Freshest unagi in Singapore";

    return (
        <>
            <div className="">
                <h1>{name}</h1>
                {/* <h3>Opening Hours:</h3>
        <p>{hours}</p> */}
                {/* <h3>Price:</h3>
        <p>{price}</p> */}
                <h3>Address:</h3>
                <p>{address}</p>
                <h3>Nearest MRT:</h3>
                <p>{mrt}</p>
                {/* <h3>Description</h3>
        <p>{description}</p> */}
            </div>
        </>
    );
};

export default ProductInformation;
