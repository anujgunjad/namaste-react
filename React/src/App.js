import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ErrorPage from './components/ErrorPage';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from './components/RestrauntMenu';
// Case 1- using hardcoded data
// const RestaurantCard = () => {
//     return (
//         <div className='card'>
//             <img
//                 src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/keyaneymfh2vgtp2uzq5"
//                 alt="Burger King" />
//             <h2>Burger King</h2>
//             <h3>Burgers, Americans</h3>
//             <h4>4.2 Stars</h4>
//         </div>
//     )
// }




//  Case 2 - For single restaurant
// const burgerKing = {
// name:'Burger King',
// image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/keyaneymfh2vgtp2uzq5',
// cuisines : ['Burgers','Americans'],
// rating:'4.2'
// }

// const RestaurantCard = () => {
//     return (
//         <div className='card'>
//             <img src= {burgerKing.image} alt="Burger King" />
//             <h2>{burgerKing.name}</h2>
//             <h3>{burgerKing.cuisines.join(" , ")}</h3>
//             <h4>{burgerKing.rating} stars</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//        <div>
//         <RestaurantCard/>
//        </div>
//     )
// }




// Case 3 - If we have multiple restaurant cards, all will be burger king and we don't need this. 
// const burgerKing = {
//     name:'Burger King',
//     image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/keyaneymfh2vgtp2uzq5',
//     cuisines : ['Burgers','Americans'],
//     rating:'4.2'
//     }


//     const RestaurantCard = () => {
//         return (
//             <div className='card'>
//                 <img src= {burgerKing.image} alt="Burger King" />
//                 <h2>{burgerKing.name}</h2>
//                 <h3>{burgerKing.cuisines.join(" , ")}</h3>
//                 <h4>{burgerKing.rating} stars</h4>
//             </div>
//         )
//     }

//     const Body = () => {
//         return (
//            <div className='restaurant-list'>
//             <RestaurantCard/>
//             <RestaurantCard/>
//             <RestaurantCard/>
//             <RestaurantCard/>
//             <RestaurantCard/>
//             <RestaurantCard/>
//            </div>
//         )
//     }



// Case 4 - In real world we will be having restaurant list as array of objects.
//  But its showing the same data in every card. so, go to fifth case

// const RestaurantCard = () => {
//     return (
//         <div className='card'>
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurantList[0].data?.cloudinaryImageId} alt="Burger King" />
//             {/* if data is not available we can write like below syntax "?""
//                 this is known as optional chaining */}
//             <h2>{restaurantList[0].data?.name}</h2>
//             <h3>{restaurantList[0].data?.cuisines.join(" , ")}</h3>
//             <h4>{restaurantList[0].data?.totalRatingsString}</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className='restaurant-list'>
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//         </div>
//     )
// }


// Case 5- Passing restaurant as a prop to RestaurantCard

// const RestaurantCard = (props) => {
//     return (
//         <div className='card'>
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.restaurant.data?.cloudinaryImageId} alt="Burger King" />
//             {/* if data is not available we can write like below syntax "?""
//                 this is known as optional chaining */}
//             <h2>{props.restaurant.data?.name}</h2>
//             <h3>{props.restaurant.data?.cuisines.join(" , ")}</h3>
//             <h4>{props.restaurant.data?.totalRatingsString}</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className='restaurant-list'>
//             <RestaurantCard restaurant ={restaurantList[0]}  />
//             <RestaurantCard restaurant ={restaurantList[1]} />
//             <RestaurantCard restaurant ={restaurantList[2]}/>
//             <RestaurantCard restaurant ={restaurantList[3]}/>
//             <RestaurantCard restaurant ={restaurantList[4]}/>
//             <RestaurantCard restaurant ={restaurantList[5]}/>
//             <RestaurantCard restaurant ={restaurantList[6]}/>
//         </div>
//     )
// }


//Case 6 - Using destructuring in Restaurant Card
// const RestaurantCard = ({restaurant}) => {
//     return (
//         <div className='card'>
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurant.data?.cloudinaryImageId} alt="Burger King" />
//             {/* if data is not available we can write like below syntax "?""
//                 this is known as optional chaining */}
//             <h2>{restaurant.data?.name}</h2>
//             <h3>{restaurant.data?.cuisines.join(" , ")}</h3>
//             <h4>{restaurant.data?.totalRatingsString}</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className='restaurant-list'>
//             <RestaurantCard restaurant ={restaurantList[0]}  />
//             <RestaurantCard restaurant ={restaurantList[1]} />
//             <RestaurantCard restaurant ={restaurantList[2]}/>
//             <RestaurantCard restaurant ={restaurantList[3]}/>
//             <RestaurantCard restaurant ={restaurantList[4]}/>
//             <RestaurantCard restaurant ={restaurantList[5]}/>
//             <RestaurantCard restaurant ={restaurantList[6]}/>
//         </div>
//     )
// }

// Case 7 - Destructuring can be done in this way as well
// const RestaurantCard = ({restaurant}) => {
//     const {name,cloudinaryImageId,cuisines,totalRatingsString} = restaurant.data
//     return (
//         <div className='card'>
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt="Burger King" />
//             {/* if data is not available we can write like below syntax "?""
//                 this is known as optional chaining */}
//             <h2>{name}</h2>
//             <h3>{cuisines.join(" , ")}</h3>
//             <h4>{totalRatingsString}</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className='restaurant-list'>
//             <RestaurantCard restaurant ={restaurantList[0]}  />
//             <RestaurantCard restaurant ={restaurantList[1]} />
//             <RestaurantCard restaurant ={restaurantList[2]}/>
//             <RestaurantCard restaurant ={restaurantList[3]}/>
//             <RestaurantCard restaurant ={restaurantList[4]}/>
//             <RestaurantCard restaurant ={restaurantList[5]}/>
//             <RestaurantCard restaurant ={restaurantList[6]}/>
//         </div>
//     )
// }


// Case-8 Destructring can be done in one more way-
// const RestaurantCard = ({ name, cloudinaryImageId, cuisines, totalRatingsString }) => {
//     return (
//         <div className='card'>
//             {/* <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt="Burger King" /> */}
//             <h2>{name}</h2>
//             <h3>{cuisines.join(" , ")}</h3>
//             {/* <h4>{totalRatingsString}</h4> */}
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className='restaurant-list'>
//             <RestaurantCard name={restaurantList[0].data.name}
//                 cuisines={restaurantList[0].data.cuisines} />
//             <RestaurantCard name={restaurantList[1].data.name}
//                 cuisines={restaurantList[1].data.cuisines} />
//             <RestaurantCard name={restaurantList[2].data.name}
//                 cuisines={restaurantList[2].data.cuisines} />
//             <RestaurantCard name={restaurantList[3].data.name}
//                 cuisines={restaurantList[3].data.cuisines} />
//             <RestaurantCard name={restaurantList[4].data.name}
//                 cuisines={restaurantList[4].data.cuisines} />
//             <RestaurantCard name={restaurantList[5].data.name}
//                 cuisines={restaurantList[5].data.cuisines} />
//             <RestaurantCard name={restaurantList[6].data.name}
//                 cuisines={restaurantList[6].data.cuisines} />
//         </div>
//     )
// }

//Case 9 - we can use spread operators also
// const RestaurantCard = ({ name, cloudinaryImageId, cuisines, totalRatingsString }) => {
//     return (
//         <div className='card'>
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt="Burger King" />
//             <h2>{name}</h2>
//             <h3>{cuisines.join(" , ")}</h3>
//             <h4>{totalRatingsString}</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className='restaurant-list'>
//             <RestaurantCard {...restaurantList[0].data}/>
//             <RestaurantCard {...restaurantList[1].data}/>
//             <RestaurantCard {...restaurantList[2].data}/>
//             <RestaurantCard {...restaurantList[3].data}/>
//             <RestaurantCard {...restaurantList[4].data}/>
//             <RestaurantCard {...restaurantList[5].data}/>
//             <RestaurantCard {...restaurantList[6].data}/>
//         </div>
//     )
// }

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantMenu />
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)