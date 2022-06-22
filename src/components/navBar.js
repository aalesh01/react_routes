import { Link } from "react-router-dom";



const NavBar = () => {
    return (
        <>
        <Link to="/" >Home</Link>
        <span>     </span>
        <Link to="/products">Products</Link>
        </>
    )
}

export default NavBar;