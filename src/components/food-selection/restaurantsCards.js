import React, {useState} from 'react';
import RestaurantCard from "./restaurantCard";

import Col from "react-bootstrap/Col";

import { allData } from "./allData";


const RestaurantsCards = () => {
// () can replace return 
// "return" returns a html / UI

    const [currentPage, setCurrentPage] = useState(0);
    const currentRestaurant = allData.data[currentPage];
    const totalRestaurants = allData.data.length;

    function nextPage() {
        if (currentPage < totalRestaurants - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <>        
        
        <RestaurantCard restaurant = {currentRestaurant}></RestaurantCard>
        <Col>
            <button onClick = {nextPage}> Next
            {/* <img src = "https://cdn.shopify.com/s/files/1/1061/1924/products/Drooling_Emoji_Icon_0ea27b99-ba08-410f-b078-94bba64c4efc_large.png?v=1571606089" 
            className = "selection"
            alt = "Yes" />  */}
            </button>
        </Col>

        <Col>
            <button>
            <img src = "https://cdn.shopify.com/s/files/1/1061/1924/products/14_large.png?v=1571606116" 
            className = "selection"
            alt = "No" 
            />
            </button>
        </Col>
        


        
        </>
    )
}

export default RestaurantsCards
