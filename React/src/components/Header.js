import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Title = () => (
    <a href='/'>
        <img src='https://b.zmtcdn.com/data/pictures/chains/9/18933609/9fc9eb3e9765cb039a9d13596290d400.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
            alt="logo"
            className='logo' />
    </a>
)

const Header = () => {
    const [isLogin, setLogin] = useState(false);

    useEffect(() => {
        console.log("Use Effect");
    }, [])

    return (
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li><button onClick={() => {
                        isLogin ? setLogin(false) : setLogin(true)}
                    }
                    >{isLogin ? 'Logout' : 'Login'}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;