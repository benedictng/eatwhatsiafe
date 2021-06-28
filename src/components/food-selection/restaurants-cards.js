import React, {useState} from 'react';
import RestaurantCard from "./restaurant-card";

import Col from "react-bootstrap/Col";

import { allData } from "./all-data";

 
const RestaurantsCards = () => {
// () can replace return 
// "return" returns a html / UI
    const [currentPage, setCurrentPage] = useState(0);
    const currentRestaurant = allData.data[currentPage];
    const totalRestaurants = allData.data.length;

    const [selections, setSelections] = useState([]);
    //cannot put hooks in javascript functions

    //const prevents reassignment. so u cant define const as a and do a = a.concat because this will reassign a's value. 
    // x= a.concat will help remain a's original array state. but x will take over the concatenated state
    // a.push however, will add on to a's array and modify original array
    // for state arrays, you have to concat because setState's function is innately reassignment

    function recordNextPage() {
        // selection.push(currentRestaurant.food_id);
        //^ not a good idea because you cannot set currentRestaurant as an empty array without it being a global variable.
        
        const newSelections = selections.concat(currentRestaurant.food_id);
        setSelections(newSelections);

        if (currentPage < totalRestaurants - 1) {
            setCurrentPage(currentPage + 1);
        };
    }

    function nextPage() {
      
        if (currentPage < totalRestaurants - 1) {
            setCurrentPage(currentPage + 1);
        };
    }


    return (
        <>        
        
        <RestaurantCard restaurant = {currentRestaurant}></RestaurantCard>
        <Col>
            <button onClick = {recordNextPage}> 
            <img src = "https://cdn.shopify.com/s/files/1/1061/1924/products/Drooling_Emoji_Icon_0ea27b99-ba08-410f-b078-94bba64c4efc_large.png?v=1571606089" 
            className = "selection"
            alt = "Yes" /> 
            </button>
        </Col>

        <Col>
            <button onClick = {nextPage}>
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