import { restaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
    const [searchTxt] = useState(); //This function return 
    return (
        <>
        <div className='restaurant-list'>
            {restaurantList.map((restaurant) => {
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            })}
        </div>
        </>
    )
}

export default Body;