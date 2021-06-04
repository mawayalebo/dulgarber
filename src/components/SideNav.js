import { Link } from "react-router-dom";

const SideNav = () => {
    return ( 
        <div className="container">
            <ul>
                <li><Link to="/signup">Sign up</Link></li>
                <li><Link to="/signin">Sign up</Link></li>
                <li>Cart</li>
            </ul>
        </div>
     );
}
 
export default SideNav;