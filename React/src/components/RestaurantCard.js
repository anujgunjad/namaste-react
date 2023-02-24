import { IMG_CDN_IMAGE } from "../contants";
//Case 10- Using Map function to make it more dynamic
const RestaurantCard = ({ name, cloudinaryImageId, cuisines, totalRatingsString }) => {
    return (
        <div className='card'>
            <img src={IMG_CDN_IMAGE + cloudinaryImageId} alt="Burger King" />
            <h2>{name}</h2>
            <h3>{cuisines.join(" , ")}</h3>
            <h4>{totalRatingsString}</h4>
        </div>
    )
}

export default RestaurantCard;