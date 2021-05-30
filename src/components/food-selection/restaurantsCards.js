import React from 'react'
import RestaurantCard from "./restaurantCard";
import { allData } from "./allData";


const RestaurantsCards = () => {
// () can replace return 
// "return" returns a html / UI
    return (
        <>        
        {
        allData.data.map( (restaurant, id)=> (
        <RestaurantCard key={id} restaurant={restaurant}></RestaurantCard>
        ))
        }

        
        </>
    )
}

export default RestaurantsCards
