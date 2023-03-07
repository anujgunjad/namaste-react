import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_IMAGE } from "../contants";
const RestaurantMenu = () => {
    const {id} = useParams();
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        getSingleRestaurant();
    }, []);

    async function getSingleRestaurant() {
        let data = await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=28.4377609&lng=77.0994205&menuId='+id);
        let json = await data.json()
        setRestaurant(json.data);
    }
   
    return (
        <div>
            <h1>Restaurant Menu id : {id}</h1>
            <img src={IMG_CDN_IMAGE + restaurant.cloudinaryImageId}></img>
        </div>
    )
}

export default RestaurantMenu;