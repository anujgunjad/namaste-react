
export const Title = () => (
    <a href='/'>
        <img src='https://b.zmtcdn.com/data/pictures/chains/9/18933609/9fc9eb3e9765cb039a9d13596290d400.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
            alt="logo"
            className='logo' />
    </a>
)

const Header = () => {
    return (
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;