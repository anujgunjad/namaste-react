import { restaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(txt, data) {
    const result = data.filter((dataItem) => 
      dataItem.data.name.includes(txt)
    );
    console.log(result);
    return result;
} 

const Body = () => {
    const [searchTxt, setSearchTxt] = useState(""); //This function return 
    const [restaurantData, setRestaurantData] = useState(restaurantList);

    return (
        <>
        <div className="search-input-wrap">
            <input type="text" placeholder="search items" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} />
            <button type="button" onClick={() => {
                let data = filterData(searchTxt, restaurantData);
                setRestaurantData(data);
            }   
            }>Search</button>
        </div>
        <div className='restaurant-list'>
            {restaurantData.map((restaurant) => {
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            })}
        </div>
        </>
    )
}

export default Body;