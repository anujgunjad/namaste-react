import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(txt, data) {
    const result = data.filter((dataItem) => 
      dataItem?.data?.name?.toLowerCase()?.includes(txt)
    );
    console.log(result);
    return result;
} 

const Body = () => {
    const [searchTxt, setSearchTxt] = useState(""); //This function return 
    const [allRestaurantData, setAllRestaurantData] = useState([]);
    const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
    useEffect(() => {
        //API Call
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json?.data?.cards[2]?.data?.data?.cards);
        setAllRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurantData(json?.data?.cards[2]?.data?.data?.cards)
    }

    return (allRestaurantData?.length !== 0 ? (
        <>
        <div  className="search-input-wrap">
            <input id="one" type="text" placeholder="search items" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} />
            <button type="button" onClick={() => {
                let data = filterData(searchTxt, allRestaurantData);
                setFilteredRestaurantData(data);
            }   
            }>Search</button>
        </div>
        <div className='restaurant-list'>
            {filteredRestaurantData?.length !== 0 ? filteredRestaurantData?.map((restaurant) => {
                return <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}><RestaurantCard {...restaurant.data} /></Link>
            }) : <h1>No data found!!!</h1>}
        </div>
        </>
    ) : <Shimmer />)
  
}

export default Body;